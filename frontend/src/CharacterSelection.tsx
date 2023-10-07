import { usePageContext } from "./PageContext";

import Animal from "./models/Animal";

const Coo = new Animal("Coo", "some_url", "some_url", "no_colour");
const Nessie = new Animal("Nessie", "some_url", "some_url", "no_colour");
const Unicorn = new Animal("Unicorn", "some_url", "some_url", "no_colour");

export default function CharacterSelection() {
  const animals = [Coo, Nessie, Unicorn];
  const { setAnimal, setCurrentPage } = usePageContext();

  return (
    <div className="mx-4 mt-4 flex flex-col gap-y-8">
      <h2 className="flex justify-center text-4xl">Choose an Animal!</h2>
      <div className="flex flex-wrap justify-center gap-x-8">
        {animals.map((animal) => (
          <button
            key={animal.name}
            className="flex h-48 w-3/12 flex-row rounded-lg bg-slate-200"
            onClick={() => {
              setAnimal(animal);
              setCurrentPage("animalModifier");
            }}
          >
            {animal.name}
          </button>
        ))}
      </div>
    </div>
  );
}
