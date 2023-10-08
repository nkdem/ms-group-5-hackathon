import ShadowDiv from "../components/ShadowDiv";
import { usePageContext } from "../context/PageContext";
import Animal from "../models/Animal";

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

export default function CharacterSelection() {
  const animals = [Coo, Nessie, Unicorn];
  const { setAnimal, setCurrentPage } = usePageContext();

  return (
    <div className="mx-4 mt-4 flex flex-col gap-y-8">
      <h2 className="flex justify-center text-4xl">Choose an Animal!</h2>
      <div className="flex flex-wrap justify-center gap-x-8">
        {animals.map((animal) => (
          <ShadowDiv className="h-48 w-3/12">
            <button
              key={animal.name}
              className="flex h-full w-full flex-row rounded-lg bg-primary-100"
              onClick={() => {
                setAnimal(animal);
                setCurrentPage("animalModifier");
              }}
            >
              <img src={animal.pngUrl} className="h-full" />
            </button>
          </ShadowDiv>
        ))}
      </div>
    </div>
  );
}
