import React from "react";
import { useAccessibilityContext } from "../context/AccessibilityContext";
import { usePageContext } from "../context/PageContext";

export default function PlayExperience() {
  const {
    useEyes,
    setUseEyes,
    useFingers,
    setUseFingers,
    useVoice,
    setUseVoice,
  } = useAccessibilityContext();

  const {setCurrentPage} = usePageContext();
  return (
    <div className="w-full">
      <div>What do you want to use to move around the screen?</div>

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
        <button className="bg-red-400" onClick={() => {
          setCurrentPage("soundExperience");
        }}>Next</button>
      </div>
    </div>
  );
}
