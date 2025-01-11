import NavBar from "./components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-16">
        {" "}
        {/* Add padding-top to account for fixed navbar */}
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
