import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthProvider } from "../lib/AuthContext";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400..900"
        />
      </head>
      <body className="font-poppins relative">
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
