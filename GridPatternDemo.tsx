"use client";

import { cn } from "@/lib/utils";
import GridPattern from "./magicui/grid-pattern";

const GridPatternDemo = () => {
  return (
    <>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Grid Pattern
        </p>
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [6, 6],
            [10, 5],
            [13, 3],
          ]}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Grid Pattern
        </p>
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </>
  );
};

export default GridPatternDemo;
