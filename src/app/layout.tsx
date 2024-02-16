import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew, your automotive partner",
  description: "Save up to 50% on your insurance fees each month",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#030635]">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
