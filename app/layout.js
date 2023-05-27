import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sucious",
  description: "A facebook like app for Web3, where the user has control",
  viewport: "width=device-width, initial-scale=1",
  generator: "Hugo 0.108.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen overflow-hidden">
      <body className="d-flex h-screen text-center text-white">
        <div className="cover-container h-full p-3 mx-auto flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
