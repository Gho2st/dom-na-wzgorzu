import "./globals.css";
import { Cormorant_Infant } from "next/font/google";
import Nav from "./UI/Nav";
import Footer from "./UI/Footer";

export const metadata = {
  alternates: {
    canonical: "https://www.barbarapiekos.pl/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.barbarapiekos.pl/",
    title: "Barbara Piękoś – Oficjalne Portfolio Artystyczne",
    description:
      "Zapraszam do świata malarstwa i sztuki Barbary Piękoś. Zobacz wybrane prace, poznaj biografię artystki i jej dotychczasowe wystawy. Skontaktuj się i odkryj więcej o jej artystycznej podróży.",
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
