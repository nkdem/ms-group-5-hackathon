import SettingsLayout from "../SettingsLayout";
import ShadowDiv from "../components/ShadowDiv";
import { usePageContext } from "../context/PageContext";
import { Animal, Coo, Nessie, Unicorn, getAnimalUrl } from "../models/Animal";

export default function CharacterSelection() {
  const animals = [Coo, Nessie, Unicorn];
  const { setAnimal, setCurrentPage } = usePageContext();

  function handleClick(animal: Animal) {
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
  }
  return (
    <SettingsLayout
      title="choose an animal!"
      nextCustom={() => {
        alert("Please choose an animal!");
      }}
    >
      <div className="flex flex-wrap justify-center gap-x-8">
        {animals.map((animal) => (
          <ShadowDiv key={animal.type} className="h-fit w-[30%]">
            <button
              key={animal.name}
              className="flex h-full w-full flex-col items-center gap-5 rounded-lg p-5"
              onClick={() => handleClick(animal)}
            >
              <div className="flex justify-center">
                <img src={getAnimalUrl(animal)} className="h-full" />
              </div>

              <h1 className=" dark:text-[#4a463c]">{animal.type}</h1>
            </button>
          </ShadowDiv>
        ))}
      </div>
    </SettingsLayout>
  );
}
