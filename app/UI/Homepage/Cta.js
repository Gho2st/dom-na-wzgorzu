import Button from "../Buttons/Button";

export default function Cta() {
  return (
    <section className="text-center py-20  px-6 rounded-2xl max-w-5xl mx-auto ">
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        Zrelaksuj się i zadbaj o swoje zdrowie!
      </h2>
      <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto">
        Odpocznij w sercu natury, korzystaj z komfortowych udogodnień i pozwól
        sobie na chwilę wytchnienia. Czas zadbać o siebie – fizycznie i
        psychicznie. Zaplanuj swój pobyt już dziś!
      </p>
      <Button button="Zarezerwuj!" link={"/kontakt"} />
    </section>
  );
}
