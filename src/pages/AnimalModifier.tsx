import React from "react";
import { usePageContext } from "../context/PageContext";
import ShadowDiv from "../components/ShadowDiv";
import { getAnimalUrlWithHat, hats } from "../models/Animal";
import { twMerge } from "tailwind-merge";
import SettingsLayout from "../SettingsLayout";

export default function AnimalModifier() {
  const { animal, setCurrentPage, setAnimal } = usePageContext();
  const Colours = [
    "bg-inherit",
    "bg-[#e81d1e]",
    "bg-[#3e4fec]",
    "bg-[#ffea39]",
    "bg-[#f65cb9]",
    "bg-[#17a900]",
  ];

  const [selectedColour, setSelectedColour] = React.useState(Colours[0]);

  if (!animal) {
    throw new Error("Animal must be set before AnimalModifier can be rendered");
  }
  return (
    <SettingsLayout title="Make your animal yours!">
      <ShadowDiv>
        <h3 className="flex justify-center p-5 text-2xl">
          Select a colour and hat
        </h3>
      </ShadowDiv>
      <div className="mx-8 flex flex-row justify-between gap-3 [&>*]:w-1/3">
        <ShadowDiv className="flex flex-col items-center justify-center gap-8 p-3">
          {/* 2 circles per row */}
          {/* <div className="rounded-full h-16 w-16 bg-blue-400"/> */}
          <h1 className="text-center">Color</h1>
          <div className="mx-8 flex flex-row flex-wrap justify-evenly gap-x-8 gap-y-4">
            {Colours.map((colour) => (
              <div
                key={colour}
                className={twMerge(
                  `h-14 w-14 rounded-full ${colour} transform border-2 border-black duration-500 ease-in-out`,
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
        <ShadowDiv className="flex items-center justify-center p-3">
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
        <ShadowDiv className="flex flex-row flex-wrap justify-evenly gap-x-8">
          {/* 2 hats per row */}
          {hats.map((hat) => (
            <button
              key={hat}
              className="flex justify-center"
              onClick={() => {
                setAnimal({ ...animal, hatName: hat });
              }}
            >
              <img src={`${hat}.png`} className="w-1/2" />
            </button>
          ))}
        </ShadowDiv>
      </div>
      <button
        className="mx-auto rounded-xl bg-accent2-300 p-7 text-2xl dark:bg-accent2-600"
        onClick={() => {
          setCurrentPage("storySelector");
        }}
      >
        Crack on with a story!
      </button>
    </SettingsLayout>
  );
}
