import React from "react";
import { useAccessibilityContext } from "../context/AccessibilityContext";
import { usePageContext } from "../context/PageContext";
import ShadowDiv from "../components/ShadowDiv";

export default function PlayExperience() {
  const {
    useEyes,
    setUseEyes,
    useFingers,
    setUseFingers,
    useVoice,
    setUseVoice,
  } = useAccessibilityContext();

  const { setCurrentPage } = usePageContext();
  return (
    <div className="mx-auto flex w-3/4 flex-col gap-y-4">
      <ShadowDiv className="bg-white px-4 py-4 text-center">
        <h1 className="text-2xl">Your Play Experience</h1>
      </ShadowDiv>

      <div className="mx-auto flex w-3/4 flex-col gap-y-2">
        <ShadowDiv className="bg-white px-4 py-4">
          What do you want to use to move around the screen?
        </ShadowDiv>

        <div className="flex gap-x-4">
          <input
            name="useEyes"
            type="checkbox"
            checked={useEyes}
            onChange={() => {
              setUseEyes((prev) => !prev);
            }}
          />
          <label htmlFor="useEyes">Use Eyes</label>
        </div>

        <div className="flex gap-x-4">
          <input
            name="useFingers"
            type="checkbox"
            checked={useFingers}
            onChange={() => {
              setUseFingers((prev) => !prev);
            }}
          />
          <label htmlFor="useFingers">Use Fingers</label>
        </div>

        <div className="flex gap-x-4">
          <input
            name="useVoice"
            type="checkbox"
            checked={useVoice}
            onChange={() => {
              setUseVoice((prev) => !prev);
            }}
          />
          <label htmlFor="useVoice">Use Voice</label>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-red-400"
            onClick={() => {
              setCurrentPage("soundExperience");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
