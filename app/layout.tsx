import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { AuthProvider } from "@lib/AuthContext";
import { Poppins } from "@next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
