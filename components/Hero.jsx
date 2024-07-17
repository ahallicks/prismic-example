import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import Image from "next/image";
import Button from "./Button";
import ronald from "@/images/ronald.png";

const Hero = ({ hero_title, hero_text, hero_image, hero_link }) => {
  return (
    <div className="pt-12 pb-24 flex flex-col items-center w-screen bg-greenGrey">
      <div className="container grid grid-cols-1 md:grid-cols-2 text-left min-h-[512px] gap-24 items-center">
        <div className="grid gap-12 items-start">
          <h1>{hero_title}</h1>
          <PrismicRichText field={hero_text} />
          <div className="items-start font-semibold">
            <PrismicNextLink
              field={hero_link}
              className="flex justify-center items-center px-10 py-4 font-sans font-semibold text-white bg-darkGreen border-darkGreen border-2 rounded-lg shadow-lg"
            >
              Click me!
            </PrismicNextLink>
            {/* <Button
              link="https://en.wikipedia.org/wiki/Agriculture"
              label="Learn More"
            /> */}
          </div>
        </div>
        <PrismicNextImage
          field={hero_image}
          className="w-full h-auto rounded-3xl overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
