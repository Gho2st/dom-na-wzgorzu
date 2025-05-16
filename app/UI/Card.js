import Image from "next/image";
import Button from "./Buttons/Button";

export default function Card({ title, text, imageSrc, reverse = false }) {
  return (
    <div
      className={`w-full max-w-6xl my-6 mx-auto flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } bg-neutral-100 rounded-2xl overflow-hidden mb-12 shadow-lg`}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 aspect-[16/9] md:aspect-auto h-64 md:h-auto">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 text-center">
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold">{title}</h3>
        <p className="text-xl my-6 font-medium leading-relaxed">{text}</p>
        <Button button="Zobacz więcej" link={"/galeria"} />
      </div>
    </div>
  );
}
