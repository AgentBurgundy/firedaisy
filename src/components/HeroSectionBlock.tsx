export default function HeroSectionBlock({ className = null, children }: any) {
  return (
    <div
      className={
        "flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start" +
        " " +
        (className ? className : "")
      }
    >
      {children}
    </div>
  );
}
