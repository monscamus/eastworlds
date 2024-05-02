import "./globals.css";
import { oswald } from "@/components/fonts";
import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.samweinle.com/'),
  title: "Sam Weinle",
  description: "Video editor extraordinaire.",
  openGraph: {
    type: "profile",
    title: "The Pollutant Speaks",
    description: "Video editor extraordinaire.",
  },
  twitter: {
    card:"summary_large_image",
    title: "Sam Weinle",
    description: "Samuel Weinle, video editor extraordinaire."
  },
  publisher: "Sam Weinle"            
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">     
      <body className="bg-fixed bg-cover bg-clip-border bg-sam-editor bg-origin-border bg-right-top">
      
      <main
          className={`flex min-h-screen flex-col place-items-center ${oswald.variable} font-sans`}
        >
          <div className="max-w-2xl lg:text-xl font-light px-8 bg-black/60 text-black">{children}</div>
        </main>
      </body>
    </html>
  );
}
