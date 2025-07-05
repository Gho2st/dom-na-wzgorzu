import Card from "./UI/Card";
import About from "./UI/Homepage/About";
import Hero from "./UI/Homepage/Hero";
import Offer from "./UI/Homepage/Offer";

export const metadata = {
  title:
    "Dom Relaksu „Na Wzgórzu” – Odpoczynek, Relaks i Wypoczynek w Muszynie",
  alternates: {
    canonical: "/",
  },

  description:
    "Zrelaksuj się w Domu Relaksu „Na Wzgórzu” - piękne widoki i wyjątkowa atmosfera. Idealne miejsce na wypoczynek wśród malowniczej Muszynie!",
};

export default function Home() {
  const cardData = [
    {
      title: "Basen",
      text: "Strefa basenowa to idealne miejsce na relaks. Szczególnie dedykowany rodzinom z dziećmi.",
      imageSrc: "/basen/basen.webp",
    },
    {
      title: "Grota Solna",
      text: "Pozytywnie oddziałuje m.in. na układ oddechowy, a dzięki właściwościom soli i mikroklimatowi wzmacnia organizm. Regularne Seanse w Grocie Solnej w naturalny sposób wzmacniają odporność, poprawiają kondycję, podnoszą koncentrację oraz wspomagają leczenie wielu schorzeń.",
      imageSrc: "/grota-solna/grota-solna.webp",
    },
    {
      title: "Sauna",
      text: "Idealne miejsce na relaks i redukcję stresu. Korzystanie z sauny poprawia funkcjonowanie organizmu - obniża napięcie, zwiększa wydolność, usprawnia przemianę materii i wspiera odporność.",
      imageSrc: "/sauna/sauna.webp",
    },
    {
      title: "Siłownia / SPA",
      text: "Obiekt posiada znakomicie wyposażoną w profesjonalny sprzęt do ćwiczeń siłownię, w której znajdują się urządzenia pozwalające rzeźbić poszczególne partie mięśniowe. Strefa spa umożliwia korzystanie z kolagenowej lampy „Słoneczna łąka”, która stymuluje tworzenie kolagenu, a tym samym proces regeneracji skóry dzięki korzystnym promieniom cieplnym. Skóra wygląda na gładszą i jędrniejszą.",
      imageSrc: "/silownia/silownia.webp",
    },
  ];
  return (
    <>
      <Hero />
      <About />
      <section className="px-6 flex flex-col items-center justify-center">
        {cardData.map((item, index) => (
          <Card
            key={item.title}
            title={item.title}
            text={item.text}
            imageSrc={item.imageSrc}
            reverse={index % 2 === 1}
          />
        ))}
      </section>
      <Offer />
    </>
  );
}
