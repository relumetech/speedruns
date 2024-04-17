"use client";

import { Button } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";

export const Header26 = () => {
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                My Heading
              </h1>
              <p className="md:text-md">my description</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                  <Button
                   
                  >
Button 1                  </Button>
                  <Button
                   
                  >
Button 2                  </Button>
              </div>
            </div>
          </div>
          <div>
            <img src={"/pivot/hero-screenshot.png"} className="size-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
