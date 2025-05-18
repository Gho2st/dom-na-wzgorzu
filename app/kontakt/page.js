import LineHeader from "../UI/LineHeader";
import Map from "../UI/Map";
import Form from "./Form";

export const metadata = {
  title: "Kontakt - Skontaktuj się z Domem Relaksu „Na Wzgórzu”",
  alternates: {
    canonical: "/kontakt",
  },

  description:
    "Skontaktuj się z nami - Dom Relaksu „Na Wzgórzu” w Muszynie. Dane kontaktowe, formularz oraz dojazd w jednym miejscu.",
};
export default function Kontakt() {
  return (
    <main className="mt-26">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <LineHeader text="Kontakt" />
        <p className="text-2xl text-center md:w-3/4 mx-auto mt-10 md:mt-20">
          Masz pytania? Potrzebujesz wymarzonego odpoczynku? Napisz do Nas lub
          zadzwoń — z przyjemnością pomożemy!
        </p>
        <Form />
      </section>
      <Map />
    </main>
  );
}
