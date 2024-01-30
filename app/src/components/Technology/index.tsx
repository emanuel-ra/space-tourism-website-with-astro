import React, { useState } from "react";
import { technologies, type Technology } from "../../lib/technology";

export const Technologies = () => {
  const [technology, setTechnology] = useState<Technology>(technologies[0]);
  const [selected, setSelected] = useState<number>(0);

  const handleTechnology = ({
    technology,
    select,
  }: {
    technology: Technology;
    select: number;
  }) => {
    setTechnology(technology);
    setSelected(select);
  };

  return (
    <>
      <TechnologyComponent
        technology={technology}
        Navigation={() =>
          Buttons({ handle: handleTechnology, select: selected })
        }
      />
    </>
  );
};

const TechnologyComponent = ({
  technology,
  Navigation,
}: {
  technology: Technology;
  Navigation: React.FC;
}) => {
  return (
    <section className="flex max-lg:flex-col justify-between max-lg:gap-y-10">
      <article className="flex max-lg:order-2 max-lg:flex-col max-lg:px-10 max-lg:w-2/2 max-lg:text-center max-lg:gap-y-5 gap-x-10 lg:w-2/5 justify-center items-center">
        <Navigation />
        <div className="flex flex-col gap-y-5 animate-fade-left lg:animate-fade-right animate-ease-in-out">
          <h2 className="text-lg lg:text-xl text-white/70 uppercase">
            THE TERMINOLOGY…
          </h2>
          <h3 className="text-2xl lg:text-5xl uppercase">{technology.name}</h3>
          <blockquote className="text-pretty">
            {technology.description}
          </blockquote>
        </div>
      </article>
      <article className="max-lg:order-1 animate-fade-right lg:animate-fade-left animate-ease-in-out transition">
        <picture>
          <source
            srcSet={technology.images.landscape}
            media="(max-width:800px)"
          />
          <img
            src={technology.images.portrait}
            alt={technology.name}
            className="transition"
          />
        </picture>
      </article>
    </section>
  );
};

const Buttons = ({
  handle,
  select,
}: {
  handle: (technology: Technology) => void;
  select: number;
}) => {
  return (
    <div className="flex justify-between lg:flex-col max-lg:gap-x-5 lg:gap-y-10 animate-fade lg:animate-fade-right animate-ease-in-out ">
      {technologies.map((technology, index) => (
        <button
          key={index}
          onClick={() => {
            handle({ technology, select: index });
          }}
          className={`border-[1px] rounded-full text-lg px-4 py-2
          hover:bg-white hover:text-black
          ${
            select == index
              ? "bg-white text-black"
              : "bg-transparent text-white"
          }
          `}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
