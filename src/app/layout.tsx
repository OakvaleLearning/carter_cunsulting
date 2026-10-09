import type { Metadata } from "next";
import { EB_Garamond, Josefin_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { FloatingActions } from "@/components/layout/FloatingActions";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Carter Consulting — From Intent to Impact",
    template: "%s · Carter Consulting",
  },
  description:
    "Carter Consulting translates government policy, development ambition and business strategy into sustainable outcomes. Management and technology consulting since 2009.",
};

// Without JavaScript, motion elements would stay in their pre-animation state.
const NO_JS_STYLES = `
[data-motion]{opacity:1!important;transform:none!important;clip-path:none!important;filter:none!important}
[data-motion-hide]{display:none!important}
[data-collapse]{grid-template-rows:1fr!important}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${garamond.variable} ${josefin.variable} antialiased`}>
      <body className="min-h-svh">
        <noscript>
          <style>{NO_JS_STYLES}</style>
        </noscript>
        <MotionProvider>
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
          <FloatingActions />
        </MotionProvider>
      </body>
    </html>
  );
}
