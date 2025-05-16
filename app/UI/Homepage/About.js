import { FaQuoteLeft } from "react-icons/fa";

export default function About() {
  return (
    <section className="text-center px-6 py-16 lg:py-20">
      <span className="text-4xl lg:text-6xl font-extrabold">
        Dom Relaksu{" "}
        <span className="font-light italic">&quot;Na Wzgórzu&quot;</span>
      </span>
      <h2 className="text-2xl lg:text-4xl mt-6 lg:mt-3">
        Oaza Wypoczynku i Regeneracji w Złockiem
      </h2>
      <div className="flex flex-col mt-20 mb-10 items-center text-gray-500 lg:w-[50%] mx-auto">
        <FaQuoteLeft className="text-4xl mb-4" />
        <p className="italic text-2xl text-center leading-relaxed">
          Relaks i wypoczynek w uzdrowiskowej Muszynie — w eleganckim obiekcie o
          wysokim standardzie, położonym w spokojnej, malowniczej okolicy.
        </p>
      </div>
    </section>
  );
}
