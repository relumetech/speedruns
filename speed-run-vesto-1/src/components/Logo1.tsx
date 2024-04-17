"use client";

import type { ImageProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  images: ImageProps[];
};

export type Logo1Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Logo1 = (props: Logo1Props) => {
  const { heading, images } = {
    ...Logo1Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-12 md:py-10 lg:py-12 bg-background-tertiary">
      <div className="container">
        <p className="mx-auto mb-6 w-full max-w-lg text-center text-base md:mb-8 md:text-md font-light">
          Leading companies use Vesto as their treasury management system
        </p>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-20 gap-y-8 mb-2">
          {images.map((logo, index) => (
            <img
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 md:max-h-8 grayscale max-w-[140px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Logo1Defaults: Logo1Props = {
  heading: "Used by the world's most average companies",
  images: [
    { src: "/logos/1.png", alt: "Webflow logo 1" },
    { src: "/logos/2.png", alt: "Relume logo 1" },
    { src: "/logos/3.png", alt: "Webflow logo 2" },
    { src: "/logos/4.png", alt: "Relume logo 2" },
    { src: "/logos/5.png", alt: "Webflow logo 3" },
    { src: "/logos/6.svg", alt: "Relume logo 3" },
    { src: "/logos/7.svg", alt: "Webflow logo 4" },
    { src: "/logos/8.png", alt: "Relume logo 4" },
    { src: "/logos/9.png", alt: "Webflow logo 5" },
  ],
};
