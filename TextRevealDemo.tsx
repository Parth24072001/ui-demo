import TextRevealByWord from "./magicui/text-revel";

export async function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border bg-white dark:bg-black">
      <TextRevealByWord text="Magic UI will change the way you design." />
    </div>
  );
}
