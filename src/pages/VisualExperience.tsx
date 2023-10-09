import SettingsLayout from "../SettingsLayout";
import Checkbox from "../components/Checkbox";
import ShadowDiv from "../components/ShadowDiv";
import {
  ColorBlindness,
  colorBlindnessTypes,
  useAccessibilityContext,
} from "../context/AccessibilityContext";

export default function VisualExperience() {
  const {
    settings: { useDarkMode, useMagnifier, colorBlindness },
    setSettings,
  } = useAccessibilityContext();

  return (
    <SettingsLayout title="your visual experience">
      <div className="flex h-14 items-center gap-x-4">
        <Checkbox
          onChange={() =>
            setSettings((prev) => {
              return { ...prev, useDarkMode: !prev.useDarkMode };
            })
          }
          checked={useDarkMode}
        />
        <ShadowDiv className="flex h-full flex-grow items-center rounded-2xl pl-5 text-2xl font-thin">
          Do you want the colors of the screen to be darker in dark mode?
        </ShadowDiv>
      </div>

      <div className="flex h-14 items-center gap-x-4">
        <Checkbox
          onChange={() =>
            setSettings((prev) => {
              return { ...prev, useMagnifier: !prev.useMagnifier };
            })
          }
          checked={useMagnifier}
        />
        <ShadowDiv className="flex h-full flex-grow items-center rounded-2xl pl-5 text-2xl font-thin">
          Do you want to use a magnifying glass by holding down your finger?
        </ShadowDiv>
      </div>

      <ShadowDiv className="flex h-14 items-center gap-x-4 text-2xl font-thin p-5">
        <label htmlFor="color-blindness">
          Do you have a hard time seeing color? Is it:
        </label>
        <select
          id="color-blindness"
          className="dark:bg-[#5b5236]"
          onChange={(e) => {
            setSettings((prev) => {
              return {
                ...prev,
                colorBlindness: e.target.value as ColorBlindness,
              };
            });
          }}
        >
          {colorBlindnessTypes.map((type) => (
            <option selected={colorBlindness === type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </ShadowDiv>
    </SettingsLayout>
  );
}
