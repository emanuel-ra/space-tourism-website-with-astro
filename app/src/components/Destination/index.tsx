import { useState } from "react";

type TPlanet = "MOON" | "MARS" | "EUROPA" | "TITAN";

export const Destination = () => {
  const [planet, setPlanet] = useState<TPlanet>("MOON");
  return (
    <>
      <h1> 01 Pick your destination</h1>
      <section></section>
    </>
  );
};

const Planet = () => {
  return <h1>hELLO</h1>;
};

const Information = () => {};
