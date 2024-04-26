/* eslint-disable react/display-name */
"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "./AnimatedBeam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}></Circle>
            <Circle ref={div5Ref}></Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}></Circle>
            <Circle ref={div4Ref} className="h-16 w-16"></Circle>
            <Circle ref={div6Ref}></Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}></Circle>
            <Circle ref={div7Ref}></Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          reverse
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          reverse
          endYOffset={10}
        />
      </div>
      <div
        className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row justify-between">
            <Circle ref={div1Ref}></Circle>
            <Circle ref={div2Ref}></Circle>
          </div>
        </div>

        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
        />
      </div>
      <div
        className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row justify-between">
            <Circle ref={div1Ref}></Circle>
            <Circle ref={div2Ref}></Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
          startYOffset={10}
          endYOffset={10}
          curvature={-20}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
          reverse
          startYOffset={-10}
          endYOffset={-10}
          curvature={20}
        />
      </div>

      <div
        className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
          <div className="flex flex-col justify-center gap-2">
            <Circle ref={div1Ref}></Circle>
            <Circle ref={div2Ref}></Circle>
            <Circle ref={div3Ref}></Circle>
            <Circle ref={div4Ref}></Circle>
            <Circle ref={div5Ref}></Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={div6Ref} className="h-16 w-16"></Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={div7Ref}></Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
        />
      </div>

      <div
        className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
          <div className="flex flex-col justify-center">
            <Circle ref={div7Ref}></Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={div6Ref} className="h-16 w-16"></Circle>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <Circle ref={div1Ref}></Circle>
            <Circle ref={div2Ref}></Circle>
            <Circle ref={div3Ref}></Circle>
            <Circle ref={div4Ref}></Circle>
            <Circle ref={div5Ref}></Circle>
          </div>
        </div>

        {/* AnimatedBeams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
          duration={3}
        />
      </div>
    </>
  );
}
