"use client";

import type { ImageProps } from "@relume_io/relume-ui";
import Lottie from "react-lottie"
import animationData from "../data/pivot-lottie.json"

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Header26Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Header26 = (props: Header26Props) => {
  const { heading, description, image } = {
    ...Header26Defaults,
    ...props,
  } as Props;

  const defaultOptions = {
    animationData,
  }

  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-highlight bg-[url('/pivot/radial-bg.webp')] bg-[50%] bg-cover">
      <div className="container">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <h1 className="mb-5 text-6xl font-medium md:mb-6 md:text-10xl lg:text-12xl max-w-[75%] text-text-primary">
            {heading}
            </h1>
            <p className="md:text-md lg:text-lg max-w-[50%] text-text-primary mt-10">{description}</p>
          </div>
          <div>
            <Lottie options={defaultOptions} />

          </div>
        </div>
      </div>
    </header>
  );
};

const Header26Defaults: Header26Props = {
  heading: "Unlock the power of modern procurement",
  description: "Pivot is the ultimate Procure-to-Pay tool to help you keep your spend under control while enhancing your teams.",
  image: {
    src: "/pivot/hero-screenshot.png",
    alt: "Pivot app screenshot",
  },
};
