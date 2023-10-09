import SettingsLayout from "../SettingsLayout";
import Checkbox from "../components/Checkbox";
import ShadowDiv from "../components/ShadowDiv";
import { useAccessibilityContext } from "../context/AccessibilityContext";

export default function SoundExperience() {
  const {
    settings: { isHearingImpaired },
    setSettings,
  } = useAccessibilityContext();

  return (
    <SettingsLayout title="your sound experience">
      <div className="flex h-14 items-center gap-x-4">
        <Checkbox
          checked={isHearingImpaired}
          onChange={() => {
            setSettings((prev) => {
              return {
                ...prev,
                isHearingImpaired: !prev.isHearingImpaired,
              };
            });
          }}
        />
        <ShadowDiv className="flex h-full flex-grow items-center rounded-2xl pl-5 text-2xl font-thin">
          Are you hearing impaired?
        </ShadowDiv>
      </div>

      <ShadowDiv className="flex flex-col items-center gap-5 px-5 py-10 text-2xl font-thin">
        <label htmlFor="audio-slider">
          Adjust the sound between your left and right ears by sliding the green
          circle
        </label>
        <input
          type="range"
          min="0"
          max="100"
          placeholder="50"
          className="slider w-[80%] accent-secondary-500"
          id="audio-slider"
          onChange={(e) => {
            setSettings((prev) => {
              return {
                ...prev,
                soundAdjustment: parseInt(e.target.value),
              };
            });
          }}
        />
        <div className="relative h-[5px] w-[80%] rounded-full bg-black">
          <div className="absolute left-[50%] h-10 w-[5px] translate-y-[-50%] rounded-full bg-black"></div>
          <div className="absolute left-[0] h-10 w-[5px] translate-y-[-50%] rounded-full bg-black"></div>
          <div className="absolute left-[100%] h-10 w-[5px] translate-y-[-50%] rounded-full bg-black"></div>
        </div>
      </ShadowDiv>
    </SettingsLayout>
  );
}
