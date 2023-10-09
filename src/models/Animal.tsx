export const hats = ["fcrown", "scotcap", "tophat"] as const;
export type Hats = (typeof hats)[number];

export type Animal = {
  name: string;
  pngName: string;
  soundUrl: string;
  duration?: number;
  hatName: Hats | null;
  color: string; // color of the animal
};

export function getAnimalUrl(animal: Animal) {
  return `/${animal.pngName}.png`;
}

export function getAnimalUrlWithHat(animal: Animal) {
  if (animal.hatName === null) {
    return getAnimalUrl(animal);
  }
  return `/${animal.pngName}+${animal.hatName}.png`;
}

export const Coo: Animal = {
  name: "Coo",
  pngName: "coo",
  color: "no_colour",
  hatName: null,
  soundUrl: "mooing-cow.mp3",
  duration: 2000,
};

export const Nessie: Animal = {
  name: "Nessie",
  pngName: "Nessie",
  color: "no_colour",
  hatName: null,
  soundUrl: "splash.mp3",
  duration: 3000,
};

export const Unicorn: Animal = {
  name: "Unicorn",
  color: "no_colour",
  pngName: "Unicorn",
  hatName: null,
  soundUrl: "horse-gallop.mp3",
  duration: 2000,
};
