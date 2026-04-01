export const metadata = {
  title: "Nothingness EPK",
  description: "Electronic press kit for Nothingness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}