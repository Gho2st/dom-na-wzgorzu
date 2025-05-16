export default function LineHeader({ text }) {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-10">
      <div className="h-1 bg-yellow-600 w-full"></div>
      <h1 className="text-4xl lg:text-4xl xl:text-5xl text-center font-bold whitespace-nowrap">
        {text}
      </h1>
      <div className="h-1 bg-yellow-600 w-full"></div>
    </div>
  );
}
