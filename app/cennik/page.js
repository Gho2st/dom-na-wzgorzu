import LineHeader from "../UI/LineHeader";
import Table from "../UI/Table";

export const metadata = {
  title: "Cennik – Dom Relaksu „Na Wzgórzu” | Aktualne Ceny",
  alternates: {
    canonical: "/cennik",
  },

  description:
    "Sprawdź aktualny cennik Domu Relaksu „Na Wzgórzu”. Przejrzyste ceny relaksu i dodatkowych usług. Zarezerwuj już dziś!",
};

// Przykładowe dane dla tabeli cennika
const tableHeaders = ["Rodzaj", "Czas", "Cena"];
const tableRows = [
  ["Pakiet A (do 5 osób)", "3h", "750 PLN"],
  ["Pakiet B (do 5 osób)", "3h", "650 PLN"],
  ["Trening spersonalizowany z trenerem", "1h", "200 PLN"],
  ["Trening indywidualny", "1h", "50 PLN"],
];

export default function Cennik() {
  return (
    <main className="mt-26">
      <section className="text-center px-6 py-20 max-w-6xl mx-auto">
        <LineHeader text="Cennik" />
        <p className="text-2xl mt-20 mb-20">
          Poznaj naszą ofertę usług w Domu Relaksu „Na Wzgórzu”. Oferujemy
          komfortowe pakiety dla grup, dostęp do strefy wellness oraz
          profesjonalne treningi indywidualne. Ceny są przejrzyste, a każda
          usługa dopasowana do Twoich potrzeb.
        </p>
        <Table headers={tableHeaders} rows={tableRows} />
      </section>

      <section className="text-center py-24 px-6 rounded-2xl  mx-auto bg-neutral-100">
        <h2 className="text-4xl lg:text-5xl font-bold mb-20">
          Informacje Dodatkowe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-16 max-w-5xl mx-auto">
          <div className="border-2 border-yellow-600 p-6 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold mb-2">Pakiet A</h3>
            <p className="text-xl">
              Basen, sauna, grota solna, słoneczna łąka, siłownia.
            </p>
          </div>
          <div className="border-2 border-yellow-600 p-6 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold mb-2">Pakiet B</h3>
            <p className="text-xl">
              Sauna, grota solna, słoneczna łąka, siłownia.
            </p>
          </div>
          <div className="border-2 border-yellow-600 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              Dodatkowa godzina w pakiecie
            </h3>
            <p className="text-xl">Pakiet A – 150 zł</p>
            <p className="text-xl">Pakiet B – 100 zł</p>
          </div>
          <div className="border-2 border-yellow-600 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              Dodatkowa osoba w pakiecie
            </h3>
            <p className="text-xl">Pakiet A – 50 zł</p>
            <p className="text-xl">Pakiet B – 30 zł</p>
          </div>
        </div>
      </section>
    </main>
  );
}
