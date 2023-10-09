import ShadowDiv from "../components/ShadowDiv";
import { usePageContext } from "../context/PageContext";
import { Coo, Nessie, Unicorn, getAnimalUrl } from "../models/Animal";

export default function CharacterSelection() {
  const animals = [Coo, Nessie, Unicorn];
  const { setAnimal, setCurrentPage } = usePageContext();

  return (
    <div className="mx-4 mt-4 flex flex-col gap-y-8">
      <h2 className="flex justify-center text-4xl">Choose an Animal!</h2>
      <div className="flex flex-wrap justify-center gap-x-8">
        {animals.map((animal) => (
          <ShadowDiv key={animal.type} className="h-fit w-3/12">
            <button
              key={animal.name}
              className="flex h-full w-full flex-row rounded-lg bg-primary-100"
              onClick={() => {
                // play audio
                const audio = new Audio(animal.soundUrl);
                audio.play();
                // delay
                setTimeout(() => {
                  // set animal
                  setAnimal(animal);
                  // go to next page
                  setCurrentPage("animalModifier");
                }, animal.duration!);
              }}
            >
              <div className="flex justify-center">
                <img src={getAnimalUrl(animal)} className="h-full" />
              </div>
            </button>
          </ShadowDiv>
        ))}
      </div>
    </div>
  );
}
