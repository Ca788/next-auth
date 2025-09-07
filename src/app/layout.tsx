import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";


export const metadata: Metadata = {
  title: ":)",
  description: "Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
