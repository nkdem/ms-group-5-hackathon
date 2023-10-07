import React from "react";
import { usePageContext } from "../context/PageContext";

export default function AnimalModifier() {
  const { animal, setCurrentPage } = usePageContext();
  const Colours = ["bg-[#000]", "bg-[#999]", "bg-[#541234]", "bg-[#123456]"];
  const hats = ["hat1", "hat2", "hat3", "hat4"];

  if (!animal) {
    throw new Error("Animal must be set before AnimalModifier can be rendered");
  }
  return (
    <div className="mt-4 flex h-full flex-col gap-y-2">
      <h2 className="flex justify-center text-4xl">Make your animal yours!</h2>
      <h3 className="flex justify-center text-xl">Select a colour and hat</h3>
      <div className="mx-8 flex flex-row justify-evenly gap-x-8">
        <div className="flex-1 overflow-auto bg-red-300">
          {/* 2 circles per row */}
          {/* <div className="rounded-full h-16 w-16 bg-blue-400"/> */}
          <div className="mx-8 flex flex-row flex-wrap justify-evenly gap-x-8">
            {Colours.map((colour) => (
              <div className={`h-16 w-16 rounded-full ${colour}`} />
            ))}
          </div>
        </div>
        <div className="flex-1 bg-red-300">Animal Image</div>
        <div className="flex-1 bg-red-300">
          {/* 2 hats per row */}
          <div className="mx-8 flex flex-row flex-wrap justify-evenly gap-x-8">
            {hats.map((hat) => (
              <div className={`h-16 w-16 rounded-full bg-blue-400`} />
            ))}
          </div>
        </div>
      </div>

      <button
        className="mx-auto rounded-lg bg-yellow-300 px-12 py-12"
        onClick={() => {
          setCurrentPage("storySelector");
        }}
      >
        Crack on with a story!
      </button>
    </div>
  );
}
