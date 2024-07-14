export default function HeroSection({ className = null, children }: any) {
  return (
    <section
      className={
        "max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20" +
        " " +
        (className ? className : "")
      }
    >
      {children}
    </section>
  );
}
