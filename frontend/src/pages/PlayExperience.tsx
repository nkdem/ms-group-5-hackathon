import { useAccessibilityContext } from "../context/AccessibilityContext";
import ShadowDiv from "../components/ShadowDiv";
import Checkbox from "../components/Checkbox";
import SettingsLayout from "../SettingsLayout";

export default function PlayExperience() {
  const {
    settings: { useEyes, useFingers, useVoice },
    setSettings,
  } = useAccessibilityContext();
  return (
    <SettingsLayout title="your play experience">
      <ShadowDiv className="bg-white px-4 py-4 text-2xl">
        What do you want to use to move around the screen?
      </ShadowDiv>

      <div className="flex h-14 items-center gap-x-4">
        <Checkbox
          onChange={() =>
            setSettings((prev) => {
              return { ...prev, useEyes: !prev.useEyes };
            })
          }
          checked={useEyes}
        />
        <ShadowDiv className="flex h-full flex-grow items-center rounded-2xl pl-5 text-2xl font-thin">
          Your eyes
        </ShadowDiv>
      </div>

      <div className="flex h-14 items-center gap-x-4">
        <Checkbox
          onChange={() =>
            setSettings((prev) => {
              return { ...prev, useFingers: !prev.useFingers };
            })
          }
          checked={useFingers}
        />
        <ShadowDiv className="flex h-full flex-grow items-center rounded-2xl pl-5 text-2xl font-thin">
          Your fingers
        </ShadowDiv>
      </div>

      <div className="flex h-14 items-center gap-x-4">
        <Checkbox
          onChange={() =>
            setSettings((prev) => {
              return { ...prev, useVoice: !prev.useVoice };
            })
          }
          checked={useVoice}
        />
        <ShadowDiv className="flex h-full flex-grow items-center rounded-2xl pl-5 text-2xl font-thin">
          Your eyes
        </ShadowDiv>
      </div>
    </SettingsLayout>
  );
}
