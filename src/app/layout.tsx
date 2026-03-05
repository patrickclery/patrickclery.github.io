import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patrick Clery — Full-Stack Engineer",
  description:
    "Full-stack engineer since 2004. I inspire Claude to write code. Ruby, React, PostgreSQL, TypeScript. Montreal, Canada.",
  openGraph: {
    title: "Patrick Clery — Full-Stack Engineer",
    description:
      "Full-stack engineer since 2004. I inspire Claude to write code.",
    url: "https://patrickclery.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-[family-name:var(--font-space-grotesk)] antialiased">
        {children}
      </body>
    </html>
  );
}
