import { useState } from "react";
import { planets, type Planets } from "../../lib/planets";

export const Destination = () => {
  const [planet, setPlanet] = useState<Planets>(planets[0]);

  const handlePlane = (planet: Planets) => {
    setPlanet(planet);
  };

  return (
    <>
      <section className="flex max-lg:gap-y-4 flex-col max-lg:items-center lg:flex-row lg:justify-around">
        <Planet image={planet.image} title={planet.title} />
        <Information planets={planets} handler={handlePlane} planet={planet} />
      </section>
    </>
  );
};

const Planet = (props: { image: string; title: string }) => {
  const { image, title } = props;
  return (
    <div className="animate-fade-right animate-ease-in-out transition rounded-full w-1/2 lg:w-1/3">
      <img
        src={`./images/destination/${image}`}
        alt={title}
        className="animate-brightness shadow-[0_0px_100px_10px_rgba(255,255,255,0.5)] rounded-full"
      />
    </div>
  );
};

const Information = ({
  planets,
  handler,
  planet,
}: {
  planets: Planets[];
  handler: (planet: Planets) => void;
  planet: Planets;
}) => {
  return (
    <>
      <article className="lg:w-1/3 flex flex-col max-md:items-center max-lg:gap-2 lg:gap-4 uppercase animate-fade-left animate-ease-in-out transition">
        <nav>
          <ul className="flex gap-2 uppercase text-white/70  ">
            {planets.map((option) => (
              <li
                className={`hover:text-white hover:border-b-2 hover:border-white transition
                ${
                  option.title === planet.title
                    ? "text-white border-b-2 border-white transition"
                    : ""
                }
                `}
              >
                <a
                  href={`#`}
                  onClick={() => {
                    handler(option);
                  }}
                >
                  {option.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <h2 className="max-lg:text-4xl max-lg:text-center lg:text-7xl uppercase">
          {planet.title}
        </h2>
        <blockquote className="text-pretty max-lg:text-center">
          {planet.description}
        </blockquote>
        <hr className="bg-white/50 text-white/50 max-md:my-4 lg:my-10" />
        <div className="flex max-md:flex-col max-md:items-center max-md:gap-y-3 justify-between">
          <article className="flex flex-col">
            <span className="uppercase text-white/70">Avg. distance</span>
            <span className="uppercase text-white text-2xl">
              {planet.distance}
            </span>
          </article>
          <article className="flex flex-col">
            <span className="uppercase text-white/70">Est. travel time</span>
            <span className="uppercase text-white text-2xl">{planet.time}</span>
          </article>
        </div>
      </article>
    </>
  );
};
