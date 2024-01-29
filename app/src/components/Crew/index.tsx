import React, { useState } from "react";
import { crews, type Crew } from "../../lib/crew";
export const Crews = () => {
  const [crew, setCrew] = useState<Crew>(crews[0]);
  const [selected, setSelected] = useState<number>(0);
  const handleCrew = ({ crew, selected }: { crew: Crew; selected: number }) => {
    setCrew(crew);
    setSelected(selected);
  };
  return (
    <section className="relative">
      <Crew crew={crew}>
        <Navigation handle={handleCrew} selected={selected} />
      </Crew>
    </section>
  );
};

const Crew = ({
  crew,
  children,
}: {
  crew: Crew;
  children: React.ReactNode;
}) => {
  return (
    <article className="flex max-lg:flex-col max-lg:gap-3">
      <div className="flex flex-col max-lg:order-last lg:w-1/2 max-lg:items-center justify-around gap-y-4 animate-fade-right animate-ease-in-out transition">
        <div className="max-lg:order-2 flex flex-col  gap-y-3">
          <h2 className="text-4xl text-white/70 uppercase">{crew.role}</h2>
          <h3 className="text-5xl uppercase">{crew.name}</h3>
          <blockquote className="text-balance">{crew.bio}</blockquote>
        </div>
        {children}
      </div>
      <div className="w-full flex justify-center max-lg:border-b max-lg:border-white/70 animate-fade-left animate-ease-in-out transition">
        <img src={crew.images.webp} alt={crew.name} className="max-lg:w-1/2" />
      </div>
    </article>
  );
};

const Navigation = ({
  handle,
  selected,
}: {
  handle: ({ crew, selected }: { crew: Crew; selected: number }) => void;
  selected: number;
}) => {
  return (
    <ul className="flex flex-row gap-2 order-1 ">
      {crews.map((crew, index) => (
        <li key={index}>
          <button
            onClick={() => {
              handle({ crew, selected: index });
            }}
            className={`text-white block rounded-full w-4 h-4  ${
              selected === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        </li>
      ))}
    </ul>
  );
};
