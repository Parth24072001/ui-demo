import { BorderBeam } from "./magicui/border-beam";

export function BorderBeamDemo() {
  return (
    <>
      <div className="relative rounded-xl">
        <img
          src="/dashboard-dark.png"
          alt="Hero Image"
          className=" w-[700px] rounded-[inherit] border object-contain shadow-lg dark:block"
        />
        <img
          src="/dashboard-light.png"
          alt="Hero Image"
          className="block w-[700px] rounded-[inherit] border object-contain shadow-lg dark:hidden"
        />

        <BorderBeam size={250} duration={12} delay={9} />
      </div>
      <div className="relative h-[200px] w-[200px] rounded-xl">
        <BorderBeam />
      </div>
    </>
  );
}
