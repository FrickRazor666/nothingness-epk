import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nothingness | Digressive Death",
  description:
    "The official website of Minneapolis death metal band Nothingness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#000000",
        }}
      >
        {children}
      </body>
    </html>
  );
}