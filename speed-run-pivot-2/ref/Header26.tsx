'use client';

import type { ImageProps } from '@relume_io/relume-ui';
import Lottie from 'react-lottie';

import animationData from '../data/pivot-lottie.json';

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Header26Props = React.ComponentPropsWithoutRef<'section'> & Props;

export const Header26 = (props: Header26Props) => {
  const { heading, description, image } = {
    ...Header26Defaults,
    ...props,
  } as Props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <header className="bg-background-highlight bg-[url('/pivot/radial-bg.webp')] bg-cover bg-[50%] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container ">
        <div className="flex flex-col">
          <div className="md:mb-18 mb-12 lg:mb-20">
            <h1 className="text-text-primary text-12xl animate-in slide-in-from-top fade-in max-w-[75%] font-medium delay-200 duration-500 ease-out">
              {heading}
            </h1>
            <p className="text-text-primary animate-in slide-in-from-top fade-in mt-10 max-w-[50%] text-lg delay-200 duration-500 ease-out">
              {description}
            </p>
          </div>
          <div className="w-full">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </header>
  );
};

const Header26Defaults: Header26Props = {
  heading: 'Medium length hero heading goes here',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  image: {
    src: 'https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg',
    alt: 'Placeholder image',
  },
};
