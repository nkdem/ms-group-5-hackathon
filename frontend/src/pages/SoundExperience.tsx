import ShadowDiv from "../components/ShadowDiv";
import { useAccessibilityContext } from "../context/AccessibilityContext";
import { usePageContext } from "../context/PageContext";

export default function SoundExperience() {
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
        <h1 className="text-2xl">Your Sound Experience</h1>
      </ShadowDiv>

      <div className="mx-auto flex w-3/4 flex-col gap-y-2">
        <div className="flex gap-x-4">
          <ShadowDiv>X</ShadowDiv>
          <ShadowDiv>Y</ShadowDiv>

          <ShadowDiv>Are you hearing impaired?</ShadowDiv>
        </div>

        <ShadowDiv>
          <p>
            Adjust the sound between your left and right ears by sliding the
            green circle
          </p>
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            className="slider"
            id="myRange"
          ></input>
        </ShadowDiv>

        <div className="flex justify-end">
          <button
            className="bg-red-400"
            onClick={() => {
              setCurrentPage("visualExperience");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
