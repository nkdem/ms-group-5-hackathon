import React from "react";
import { usePageContext } from "../context/PageContext";
import ShadowDiv from "../components/ShadowDiv";
import { getAnimalUrlWithHat, hats } from "../models/Animal";
import { twMerge } from "tailwind-merge";

export default function AnimalModifier() {
  const { animal, setCurrentPage, setAnimal } = usePageContext();
  const Colours = [
    "bg-inherit",
    "bg-[#e81d1e]",
    "bg-[#3e4fec]",
    "bg-[#ffea39]",
    "bg-[#f65cb9]",
    "bg-[#8f1ee8]",
    "bg-[#17a900]",
  ];

  const [selectedColour, setSelectedColour] = React.useState(Colours[0]);

  if (!animal) {
    throw new Error("Animal must be set before AnimalModifier can be rendered");
  }
  return (
    <div className="mt-4 flex h-full flex-col gap-y-4">
      <h2 className="flex justify-center text-4xl">Make your animal yours!</h2>
      <h3 className="flex justify-center text-xl">Select a colour and hat</h3>
      <div className="mx-8 flex flex-row justify-evenly gap-x-8">
        <ShadowDiv className="flex w-1/3 flex-col gap-y-8">
          {/* 2 circles per row */}
          {/* <div className="rounded-full h-16 w-16 bg-blue-400"/> */}
          <h1 className="text-center">Color</h1>
          <div className="mx-8 flex flex-row flex-wrap justify-evenly gap-x-8 gap-y-4">
            {Colours.map((colour) => (
              <div
                className={twMerge(
                  `h-16 w-16 rounded-full ${colour} transform border-2 border-black duration-500 ease-in-out`,
                  selectedColour === colour ? "scale-125" : "scale-100",
                )}
                onClick={() => {
                  setSelectedColour(colour);
                  setAnimal({ ...animal, colour: colour });
                }}
              />
            ))}
          </div>
        </ShadowDiv>
        <ShadowDiv className="flex w-1/3 items-center justify-center">
          <div>
            <div
              className={twMerge(
                "mx-auto my-4 flex h-60 w-60 transform flex-col justify-center rounded-full duration-500 ease-in-out",
                selectedColour,
              )}
            >
              {/* clip */}
              <img src={getAnimalUrlWithHat(animal)} />
            </div>
            <div className="mt-4 flex justify-center">
              <input
                className="w-3/4 rounded-lg bg-slate-100 p-4 text-xl placeholder:text-inherit placeholder:opacity-40 dark:bg-[#625c4e]"
                placeholder="Name"
                value={animal.name}
                onChange={(e) => {
                  setAnimal({ ...animal, name: e.target.value });
                }}
              />
            </div>
          </div>
        </ShadowDiv>
        <ShadowDiv className="w-1/3">
          {/* 2 hats per row */}
          <div className="mx-8 flex flex-row flex-wrap justify-evenly gap-x-8">
            {hats.map((hat) => (
              <button
                className="flex justify-center"
                onClick={() => {
                  setAnimal({ ...animal, hatName: hat });
                }}
              >
                <img src={`${hat}.png`} className="w-1/2" />
              </button>
            ))}
          </div>
        </ShadowDiv>
      </div>

      {/* character name */}
      {/* <div className="flex justify-center">
        <ShadowDiv className="flex w-1/3 flex-col gap-y-8 px-4 py-4">
          <h1 className="text-center">Name</h1>
          <input
            className="rounded-lg border-2 border-black bg-inherit"
            value={animal.name}
            onChange={(e) => {
              setAnimal({ ...animal, name: e.target.value });
            }}
          />
        </ShadowDiv>
        </div> */}

      <button
        className="mx-auto rounded-xl bg-accent2-300 px-12 py-12 text-2xl dark:bg-accent2-600"
        onClick={() => {
          setCurrentPage("storySelector");
        }}
      >
        Crack on with a story!
      </button>
    </div>
  );
}
