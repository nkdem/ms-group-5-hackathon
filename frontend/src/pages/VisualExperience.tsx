import ShadowDiv from "../components/ShadowDiv";
import { useAccessibilityContext } from "../context/AccessibilityContext";
import { usePageContext } from "../context/PageContext";

export default function VisualExperience() {
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
        <h1 className="text-2xl">Your Visual Experience</h1>
      </ShadowDiv>

      <div className="mx-auto flex w-3/4 flex-col gap-y-2">
        <div className="flex gap-x-4">
          <ShadowDiv>X</ShadowDiv>

          <ShadowDiv>
            Do you want the colors of the screen to be darker in dark mode?
          </ShadowDiv>
        </div>
        <div className="flex gap-x-4">
          <ShadowDiv>X</ShadowDiv>

          <ShadowDiv>
            Do you want to use a magnifying glass by holding down your finger?
          </ShadowDiv>
        </div>

        <div className="flex gap-x-4">
          <ShadowDiv>X</ShadowDiv>

          <ShadowDiv>Would you like a screen reader?</ShadowDiv>
        </div>

        <div className="flex gap-x-4">
          <ShadowDiv>Do you have a hard time seeing color? Is it:</ShadowDiv>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-red-400"
            onClick={() => {
              setCurrentPage("confirmSettings");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
