"use client";

import { Button } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading?: string;
  description?: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header26Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Header26 = (props: Header26Props) => {
  const { heading, description, buttons, image } = {
    ...Header26Defaults,
    ...props,
  } as Props;
  return (
    <header className="px-[5%] pt-16 md:pt-24 lg:pt-28 border-b border-border-primary overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              {heading && (<h1 className="mb-5 text-6xl font-normal tracking-[-.08rem] md:mb-6 md:text-9xl lg:text-10xl">
                {heading}
              </h1>)}
              <p className="md:text-2xl font-light">{description}</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-10">
                {buttons.map((button, index) => (
                  <Button
                    key={`${button.title}-${index}`}
                    variant={button.variant}
                    size={button.size}
                    iconRight={button.iconRight}
                    iconLeft={button.iconLeft}
                  >
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="border border-border-primary border-b-0 rounded-tr-lg rounded-tl-lg shadow-xlarge">
            <img src={image.src} className="size-full object-cover rounded-tr-lg rounded-tl-lg" alt={image.alt} />
          </div>
        </div>
      </div>
    </header>
  );
};

const Header26Defaults: Header26Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
    alt: "Placeholder image",
  },
};
