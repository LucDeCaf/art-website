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
