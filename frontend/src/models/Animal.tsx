export const hats = ["fcrown", "scotcap", "tophat"] as const;
export type Hats = (typeof hats)[number];

export type Animal = {
  name: string; // name of the animal
  pngName: string;
  soundUrl: string; // url to the sound file
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
  soundUrl: "some_url",
};

export const Nessie: Animal = {
  name: "Nessie",
  pngName: "Nessie",
  color: "no_colour",
  hatName: null,
  soundUrl: "some_url",
};

export const Unicorn: Animal = {
  name: "Unicorn",
  color: "no_colour",
  pngName: "Unicorn",
  hatName: null,
  soundUrl: "some_url",
};
