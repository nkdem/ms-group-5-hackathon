import React, { createContext, useContext, useEffect, useState } from "react";

type ColorBlindness =
  | "protanopia"
  | "deuteranopia"
  | "tritanopia"
  | "achromatopsia"
  | "invertColors"
  | "none";

type AccessibilityContextProps = {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
};

const AccessibilityContext = createContext<
  AccessibilityContextProps | undefined
>(undefined);

export const useAccessibilityContext = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibilityContext must be used within an AccessibilityContextProvider",
    );
  }
  return context;
};

const defaultSettings = {
  useEyes: false,
  useFingers: false,
  useVoice: false,
  isHearingImpaired: false,
  soundAdjustment: 0,
  useDarkMode: false,
  useMagnifier: false,
  colorBlindness: "none",
};

type Settings = typeof defaultSettings;

function getDefaultSettings(): Settings {
  const storedSettings = localStorage.getItem("settings");

  return storedSettings
    ? (JSON.parse(storedSettings) as Settings)
    : defaultSettings;
}

export const AccessibilityContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(getDefaultSettings);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  });

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
