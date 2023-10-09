import Marquee from "react-fast-marquee";
import ShadowDiv from "../components/ShadowDiv";
import { usePageContext } from "../context/PageContext";
import { Coo, Nessie, Unicorn, getAnimalUrl } from "../models/Animal";
import Button from "../Button";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function HomePage() {
  const { setCurrentPage } = usePageContext();
  const animals = [Coo, Nessie, Unicorn];
  return (
    <div className="flex flex-col h-full">
      <ShadowDiv className="w-fit mb-10">
        <div className="rounded-full bg-white px-2 py-2">
          <img src="/chas-logo.png" className="mx-auto w-48 rounded-full" />
        </div>
      </ShadowDiv>

      <div className="flex flex-col items-center gap-10 flex-grow">
        <ShadowDiv className="mx-auto flex w-[50%] justify-center p-5 py-6">
          <button onClick={() => setCurrentPage("playExperience")}>
            <h1> Nessie, the Coo and the Unicorn</h1>
          </button>
        </ShadowDiv>

        <Button
          onClick={() => setCurrentPage("playExperience")}
          className="mx-auto w-52 rounded-3xl px-10"
        >
          <PlayIcon className="text-neutral-200" />
        </Button>

        <Marquee className="mx-auto mt-auto" direction="right">
          {animals.map((animal) => (
            <img
              key={animal.type}
              src={getAnimalUrl(animal)}
              className="w-56"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
