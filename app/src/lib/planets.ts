export interface Planets {
  title: string;
  description: string;
  distance: string;
  time: string;
  image: string;
}
export const planets: Planets[] = [
  {
    title: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
    image: "image-moon.webp",
  },
  {
    title: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    time: "9 months",
    image: "image-mars.webp",
  },
  {
    title: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    time: "3 years",
    image: "image-europa.webp",
  },
  {
    title: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    time: "7 years",
    image: "image-titan.webp",
  },
];
