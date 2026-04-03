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