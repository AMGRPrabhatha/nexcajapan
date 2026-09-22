import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexca - Japan Vehicle Exports",
  description: "Exporting premium Japanese vehicles worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-gray-900 bg-white">{children}</body>
    </html>
  );
}
