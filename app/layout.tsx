import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { AuthProvider } from "@lib/AuthContext";

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>ArtLuc - Rallim Prep</title>
      </head>
      <body className="bg-black text-white font-poppins">
        <AuthProvider>
          <Navbar />
          <div className="bg-slate-700">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
