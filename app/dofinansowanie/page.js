import Image from "next/image";
import LineHeader from "../UI/LineHeader";

export const metadata = {
  title: "Dofinansowanie – Dom Relaksu Na Wzgórzu | Muszyna",
  alternates: {
    canonical: "/dofinansowanie",
  },
  description:
    "Projekt Dom Relaksu „Na Wzgórzu” w Muszynie współfinansowany z funduszy UE – rozwój infrastruktury turystycznej i rekreacyjnej w ramach RPO Małopolska 2014–2020.",
};

export default function Dofinansowanie() {
  return (
    <main className="mt-26">
      <section className="text-center px-6 py-20 max-w-6xl mx-auto">
        <LineHeader text="Dofinansowanie" />
        <p className="text-2xl mt-20 mb-20">
          PROJEKT: Dom Relaksu „Na Wzgórzu” - rozbudowa infrastruktury
          turystycznej i rekreacyjnej uzdrowiska Muszyna
        </p>

        <div className="flex justify-center items-center">
          <div className="w-1/3">
            <Image
              src={"/dofinansowanie/1.webp"}
              width={500}
              height={500}
              layout="responsive"
              alt="Fundusze Europejskie Program Regionalny"
            />
          </div>
          <div className="w-1/3">
            <Image
              src={"/dofinansowanie/2.webp"}
              width={500}
              height={500}
              layout="responsive"
              alt="Małopolska"
            />
          </div>
          <div className="w-1/3">
            <Image
              src={"/dofinansowanie/3.webp"}
              width={500}
              height={500}
              layout="responsive"
              alt="Unia Europejska Europejski Fundusz Rozwoju Regionalnego"
            />
          </div>
        </div>
        <div className="text-left mt-10 text-xl flex flex-col gap-4">
          <h3 className="font-bold">Realizator Projektu</h3>
          <p>
            M-DECOR Marzena Mikulec, Projektowanie i Aranżacja Wnętrz, ul.
            Gajowa 25, 33-395 Chełmiec
          </p>
          <h3 className="font-bold">Okres Realizacji</h3>
          <p>01.01.2019 r. - 30.06.2023 r.</p>
          <h3 className="font-bold">Wartość projektu</h3>
          <p>3 373 885,71 PLN</p>
          <h4 className="font-bold">W tym:</h4>
          <p>
            współfinansowanie z EFRR - 2 202 472,57 PLN Projekt Dom Relaksu Na
            Wzgórzu - rozbudowa infrastruktury turystycznej i rekreacyjnej
            uzdrowiska Muszyna jest realizowany w ramach Regionalnego Programu
            Operacyjnego Województwa Małopolskiego 2014-2020, 6. Osi
            Priorytetowej Dziedzictwo regionalne, Działanie 6.3 Rozwój
            wewnętrznych potencjałów regionu, Poddziałanie 6.3.2 Wsparcie
            miejscowości uzdrowiskowych, z Europejskiego Funduszu Rozwoju
            Regionalnego.
          </p>
          <h3 className="font-bold">Cel projektu</h3>
          <p>
            Celem projektu było rozszerzenie infrastruktury
            sportowo-rekreacyjnej przeznaczonej dla turystów nastawionych na
            aktywne formy spędzania czasu oraz uzupełnienie treningu
            podstawowego w różnych dyscyplinach sportu.
          </p>
          <h3 className="font-bold">Adresaci projektu</h3>
          <p>
            Projekt adresowany jest do osób uprawiających tzw. turystykę
            aktywną, które stanowią rosnącą z roku na rok grupę osób
            odwiedzających nie tylko uzdrowisko Muszyna lecz całą Małopolskę.
            Ponadto oferta ośrodka jest adresowana do grup sportowców
            przebywających w Muszynie w związku z zorganizowanymi obozami
            sportowymi o charakterze treningowym lub kondycyjnym.
          </p>
          <h3 className="font-bold">Świadczone usługi</h3>
          <p>
            zajęcia sportowo - rekreacyjne (siłownia, basen, sauna, grota solna,
            regeneracja przy wykorzystaniu lampy kolagenowej „Słoneczna łąka”)
          </p>
        </div>
      </section>
    </main>
  );
}
