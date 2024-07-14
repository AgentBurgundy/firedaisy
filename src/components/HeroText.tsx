export default function HeroText({ text }: any) {
  return (
    <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
      {text}
    </h1>
  );
}
