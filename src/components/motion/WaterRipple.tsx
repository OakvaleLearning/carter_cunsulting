"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { cn } from "@/lib/cn";

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

// A drop lands on the left edge and its rings spread across to the right edge,
// losing strength as they go, before the next drop falls. The ring's slope drives
// a soft light/shadow pass so the ripples catch the light like water.
const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform sampler2D u_tex;
uniform vec2 u_res;
uniform vec2 u_img;
uniform float u_time;
varying vec2 v_uv;

const float CYCLE = 9.0;

void main() {
  vec2 uv = v_uv;
  float rc = u_res.x / u_res.y;

  // Distances in aspect-corrected space so the rings stay circular.
  vec2 dv = vec2(uv.x * rc, uv.y) - vec2(0.0, 0.5);
  float d = length(dv);
  vec2 dir = dv / max(d, 0.0001);

  // Progress through one drop; the front clears the far corners before it restarts.
  float k = fract(u_time / CYCLE);
  float radius = k * (length(vec2(rc, 0.5)) + 0.3);
  float x = d - radius;

  // A short train of rings around the wavefront, fading in on impact and out with distance.
  float env = exp(-x * x / 0.01) * smoothstep(0.0, 0.04, k) * (1.0 - 0.7 * k);
  float wave = sin(x * 42.0) * env;
  float slope = cos(x * 42.0) * env;

  vec2 disp = dir * wave * 0.012;
  disp.x /= rc;

  // object-fit: cover, zoomed slightly so displaced edges never reveal the border.
  vec2 scale = vec2(1.0);
  float ri = u_img.x / u_img.y;
  if (rc > ri) scale.y = ri / rc; else scale.x = rc / ri;
  scale *= 0.96;
  vec2 st = (uv - 0.5) * scale + 0.5 + disp;
  st.y = 1.0 - st.y;

  vec3 col = texture2D(u_tex, clamp(st, 0.0, 1.0)).rgb;
  col *= 1.0 + slope * 0.12;
  gl_FragColor = vec4(col, 1.0);
}`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  return shader;
}

/**
 * Renders `src` with a slow water-drop ripple running from its left edge to its
 * right, repeating every 9s (scaled by `speed`). Sits over a static image
 * of the same source, fading in once the first frame is drawn; renders nothing
 * under reduced motion or without WebGL, leaving the static image in place.
 */
export function WaterRipple({ src, className, speed = 1 }: { src: string; className?: string; speed?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotionSafe();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = ref.current;
    if (reduce || !canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!gl) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_res");
    const uImg = gl.getUniformLocation(program, "u_img");
    const uTime = gl.getUniformLocation(program, "u_time");

    let raf = 0;
    let visible = true;
    let loaded = false;
    let elapsed = 0;
    let last = performance.now();
    let disposed = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * dpr));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    const frame = (now: number) => {
      elapsed += Math.min(now - last, 100) / 1000;
      last = now;
      gl.uniform1f(uTime, elapsed * speed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (!loaded || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const img = new window.Image();
    img.decoding = "async";
    img.onload = () => {
      if (disposed) return;
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      gl.uniform2f(uImg, img.naturalWidth, img.naturalHeight);
      loaded = true;
      resize();
      start();
      setReady(true);
    };
    img.src = src;

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    io.observe(canvas);
    document.addEventListener("visibilitychange", start);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", start);
    };
  }, [src, speed, reduce]);

  if (reduce) return null;

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={cn(
        "absolute inset-0 h-full w-full transition-opacity duration-1000",
        ready ? "opacity-100" : "opacity-0",
        className,
      )}
    />
  );
}
