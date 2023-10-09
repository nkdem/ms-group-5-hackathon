import Marquee from "react-fast-marquee";
import ShadowDiv from "../components/ShadowDiv";
import { usePageContext } from "../context/PageContext";
import { Coo, Nessie, Unicorn, getAnimalUrl } from "../models/Animal";

export default function HomePage() {
  const { setCurrentPage } = usePageContext();
  const animals = [Coo, Nessie, Unicorn];
  return (
    <div className="flex flex-col justify-around gap-y-8">
      <ShadowDiv className="w-fit">
        <button
          className="rounded-full bg-white px-2 py-2"
          onClick={() => setCurrentPage("home")}
        >
          <img src="/chas-logo.png" className="mx-auto w-48 rounded-full" />
        </button>
      </ShadowDiv>

      <ShadowDiv className="mx-auto mb-20 flex w-[50%] justify-center p-5 py-6">
        <button onClick={() => setCurrentPage("playExperience")}>
          <h1> Nessie, the Coo and the Unicorn</h1>
        </button>
      </ShadowDiv>

      <Marquee className="mx-auto" direction="right">
        {animals.map((animal) => (
          <img src={getAnimalUrl(animal)} className="w-56" />
        ))}
      </Marquee>
    </div>
  );
}
