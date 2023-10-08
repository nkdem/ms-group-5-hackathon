type Animal = {
  name: string; // name of the animal
  pngUrl: string; // url to the png image
  soundUrl: string; // url to the sound file
  hatUrl: string; // url to the hat image
  color: string; // color of the animal
};

const Coo: Animal = {
  name: "Coo",
  pngUrl: "/coo.png",
  color: "no_colour",
  hatUrl: "some_url",
  soundUrl: "some_url",
};

const Nessie: Animal = {
  name: "Nessie",
  pngUrl: "/Nessie.png",
  color: "no_colour",
  hatUrl: "some_url",
  soundUrl: "some_url",
};

const Unicorn: Animal = {
  name: "Unicorn",
  color: "no_colour",
  pngUrl: "/Unicorn.png",
  hatUrl: "some_url",
  soundUrl: "some_url",
};

export { Coo, Nessie, Unicorn };
