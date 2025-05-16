import Card from "../UI/Card";
import LineHeader from "../UI/LineHeader";
import Map from "../UI/Map";


export const metadata = {
  title: "O Nas – Poznaj Dom Relaksu „Na Wzgórzu” ",
  alternates: {
    canonical: "/o-nas",
  },

  description:
    "Dowiedz się więcej o Domu Relaksu „Na Wzgórzu”. Tworzymy miejsce, do którego chce się wracać.",
};

export default function Onas() {
  const cardData = [
    {
      title: "Basen",
      text: "Strefa basenowa to idealne miejsce na relaks. Szczególnie dedykowany rodzinom z dziećmi.",
      imageSrc: "/basen/basen.jpg",
    },
    {
      title: "Grota Solna",
      text: "Pozytywnie oddziałuje m.in. na układ oddechowy, a dzięki właściwościom soli i mikroklimatowi wzmacnia organizm. Regularne Seanse w Grocie Solnej w naturalny sposób wzmacniają odporność, poprawiają kondycję, podnoszą koncentrację oraz wspomagają leczenie wielu schorzeń.",
      imageSrc: "/grota-solna/grota-solna.jpg",
    },
    {
      title: "Sauna",
      text: "Idealne miejsce na relaks i redukcję stresu. Korzystanie z sauny poprawia funkcjonowanie organizmu - obniża napięcie, zwiększa wydolność, usprawnia przemianę materii i wspiera odporność.",
      imageSrc: "/sauna/sauna.jpg",
    },
    {
      title: "Siłownia / SPA",
      text: "Obiekt posiada znakomicie wyposażoną w profesjonalny sprzęt do ćwiczeń siłownię, w której znajdują się urządzenia pozwalające rzeźbić poszczególne partie mięśniowe. Strefa spa umożliwia korzystanie z kolagenowej lampy „Słoneczna łąka”, która stymuluje tworzenie kolagenu, a tym samym proces regeneracji skóry dzięki korzystnym promieniom cieplnym. Skóra wygląda na gładszą i jędrniejszą.",
      imageSrc: "/silownia/silownia.jpeg",
    },
  ];
  return (
    <main className="mt-26">
      <section className="text-center px-6 py-20 max-w-6xl mx-auto">
        <LineHeader text="O Nas" />
        <p className="text-2xl mt-20 mb-20">
          <span className="font-bold">
            Dom Relaksu{" "}
            <span className="italic font-bold"> &quot;Na Wzgórzu&quot;</span> w
            Muszynie{" "}
          </span>
          to idealne miejsce na wypoczynek w uzdrowiskowej scenerii. Oferujemy
          wyjątkowe atrakcje, które zapewnią relaks i regenerację w ciszy i
          spokoju. Nasz obiekt wyróżnia wysoki standard oraz bogata oferta:
        </p>
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
      <Map />
    </main>
  );
}
