"use client";

import type { ImageProps } from "@relume_io/relume-ui";

type SectionProps = {
  image: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  sections: SectionProps[];
};

export type Layout236Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Layout236 = (props: Layout236Props) => {
  const { sections } = { ...props, ...Layout236Defaults };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-primary">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
        {sections.map((section, index) => (
          <div key={`${section.heading}-${index}`}>
            <div className="mb-4 md:mb-4">
              <img src={section.image.src} alt={section.image.alt} />
            </div>
            <h3 className="mb-2 text-md md:mb-2 md:text-md">{section.heading}</h3>
            <p className="font-light">{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Layout236Defaults: Layout236Props = {
  sections: [
    {
      image: {
        src: "feature-1.svg",
        alt: "Placeholder image 1",
      },
      heading: "Group-wide cash visibility",
      description:
        "Instantly know your cash position across all accounts, entities and countries in real-time.",
    },
    {
      image: {
        src: "feature-2.svg",
        alt: "Placeholder image 2",
      },
      heading: "Unparalleled visibility",
      description:
        "Drill down to the transaction level, with every detail at your fingertips.",
    },
    {
      image: {
        src: "feature-3.svg",
        alt: "Placeholder image 3",
      },
      heading: "Earn yield",
      description:
        "Automatically put your idle cash to work and make the most of every dollar.",
    },
  ],
};
