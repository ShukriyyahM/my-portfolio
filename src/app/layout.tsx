import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishaq Shakeerah | Full Stack Developer",
  description:
    "Personal portfolio of Ishaq Shakeerah, a Full Stack Developer building modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}