import React from "react";
import { useAccessibilityContext } from "../context/AccessibilityContext";

export default function PlayExperience() {
  const { useEyes, setUseEyes } = useAccessibilityContext();
  return (
    <div>
      <div>What do you want to use to move around the screen?</div>

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
  );
}
