import SettingsLayout from "../SettingsLayout";
import ShadowDiv from "../components/ShadowDiv";
import {
  settingsNames,
  useAccessibilityContext,
} from "../context/AccessibilityContext";

export default function ConfirmSettings() {
  const { settings } = useAccessibilityContext();

  return (
    <SettingsLayout title="are these settings okay?">
      <ShadowDiv className="flex flex-col gap-5 p-5 text-2xl">
        {Object.keys(settings).map((key) => {
          const value = settings[key as keyof typeof settings];

          if (typeof value === "boolean") {
            return (
              <li>
                <span className="font-bold">
                  {settingsNames[key as keyof typeof settings].toUpperCase()}:
                </span>{" "}
                {value ? "yes" : "no"}
              </li>
            );
          }
          return (
            <li>
              <span className="font-bold">
                {settingsNames[key as keyof typeof settings].toUpperCase()}:
              </span>{" "}
              {value}
            </li>
          );
        })}
      </ShadowDiv>
    </SettingsLayout>
  );
}
