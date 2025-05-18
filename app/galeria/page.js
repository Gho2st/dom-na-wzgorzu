import LineHeader from "../UI/LineHeader";
import Gallery from "./Gallery";

export const metadata = {
  title:
    "Galeria Domu Relaksu „Na Wzgórzu” w Muszynie | Wnętrza, Natura i Wypoczynek",
  alternates: {
    canonical: "/galeria",
  },

  description:
    "Poznaj Dom Relaksu „Na Wzgórzu” w Muszynie – zobacz galerię zdjęć wnętrz, natury i atrakcji czekających na Ciebie. Odkryj wyjątkowe miejsce na wypoczynek w górach.",
};

export default function Galeria() {
  return (
    <main className="mt-26">
      <section className="text-center px-6 pb-0 md:pb-20 py-20 max-w-6xl mx-auto">
        <LineHeader text="Galeria" />
        <p className="text-2xl mt-20 mb-20">
          Zanurz się w wyjątkowej atmosferze naszego obiektu - zobacz, jak
          wygląda miejsce stworzone z myślą o Twoim wypoczynku. Zdjęcia mówią
          więcej niż słowa!
        </p>
        <Gallery />
      </section>
    </main>
  );
}
