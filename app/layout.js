import "./globals.css";
import { Cormorant_Infant } from "next/font/google";
import Nav from "./UI/Nav";
import Footer from "./UI/Footer";

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://muszyna-domnawzgorzu.pl/",
    title:
      "Dom Relaksu „Na Wzgórzu” – Odpoczynek, Relaks i Wypoczynek w Muszynie",
    description:
      "Zrelaksuj się w Domu Relaksu „Na Wzgórzu” - piękne widoki i wyjątkowa atmosfera. Idealne miejsce na wypoczynek wśród malowniczej Muszynie!",
    images: "/opengraph-image.png",
  },
};

const font = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={font.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
