import LineHeader from "../UI/LineHeader";
import Gallery from "./Gallery";

// export const metadata = {
//   title: "Galeria - Dom Relaksu „Na Wzgórzu” | Zobacz Nasze Wnętrza i Okolicę",
//   alternates: {
//     canonical: "/cennik",
//   },

//   description:
//     "Zobacz zdjęcia Domu Relaksu „Na Wzgórzu” – wnętrza, otoczenie i wyjątkowe chwile naszych gości. Przekonaj się, jak wygląda relaks u nas.",
// };

export default function Galeria() {
  return (
    <main className="mt-26">
      <section className="text-center px-6 pb-0 md:pb-20 py-20 max-w-6xl mx-auto">
        <LineHeader text="Galeria" />
        <p className="text-2xl mt-20 mb-20">
          Zanurz się w wyjątkowej atmosferze naszego obiektu – zobacz, jak
          wygląda miejsce stworzone z myślą o Twoim wypoczynku. Zdjęcia mówią
          więcej niż słowa!
        </p>
        <Gallery />
      </section>
    </main>
  );
}
