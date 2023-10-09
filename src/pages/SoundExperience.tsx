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

      <ShadowDiv className="text-2xl font-thin flex flex-col gap-5 items-center py-5">
        <label htmlFor="audio-slider">
          Adjust the sound between your left and right ears by sliding the green
          circle
        </label>
        <input
          type="range"
          min="0"
          max="100"
          placeholder="50"
          className="slider w-[80%]"
          id="audio-slider"
          onChange={e => {
            setSettings(prev => {
              return {
                ...prev,
                soundAdjustment: parseInt(e.target.value),
              };
            });
          }}
        />
        <div className="bg-black h-[5px] w-[80%] rounded-full relative">
          <div className="h-10 w-[5px] bg-black absolute left-[50%] translate-y-[-50%] rounded-full">
          </div>
          <div className="h-10 w-[5px] bg-black absolute left-[0] translate-y-[-50%] rounded-full">
          </div>
          <div className="h-10 w-[5px] bg-black absolute left-[100%] translate-y-[-50%] rounded-full">
          </div>
        </div>
      </ShadowDiv>
    </SettingsLayout>
  );
}