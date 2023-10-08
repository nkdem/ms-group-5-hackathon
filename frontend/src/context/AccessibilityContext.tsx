import { createContext, useContext, useEffect, useState } from "react";

type colorBlindness =
  | "protanopia"
  | "deuteranopia"
  | "tritanopia"
  | "achromatopsia"
  | "invertColors"
  | "none";

type AccessibilityContextProps = {
  useEyes: boolean;
  setUseEyes: React.Dispatch<React.SetStateAction<boolean>>;
  useFingers: boolean;
  setUseFingers: React.Dispatch<React.SetStateAction<boolean>>;
  useVoice: boolean;
  setUseVoice: React.Dispatch<React.SetStateAction<boolean>>;
  isHearingImpaired: boolean;
  setHearingImpaired: React.Dispatch<React.SetStateAction<boolean>>;
  soundAdjustment: number;
  setSoundAdjustment: React.Dispatch<React.SetStateAction<number>>;
  useDarkMode: boolean;
  setUseDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  useMagnifier: boolean;
  setUseMagnifier: React.Dispatch<React.SetStateAction<boolean>>;
  colorBlindness: colorBlindness;
  setColorBlindness: React.Dispatch<React.SetStateAction<colorBlindness>>;
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

export const AccessibilityContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [useEyes, setUseEyes] = useState<boolean>(() => {
    // Load useEyes from localStorage, default to false if not found
    const storedValue = localStorage.getItem("useEyes");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [useFingers, setUseFingers] = useState<boolean>(() => {
    // Load useFingers from localStorage, default to false if not found
    const storedValue = localStorage.getItem("useFingers");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [useVoice, setUseVoice] = useState<boolean>(() => {
    // Load useVoice from localStorage, default to false if not found
    const storedValue = localStorage.getItem("useVoice");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [isHearingImpaired, setHearingImpaired] = useState<boolean>(() => {
    // Load isHearingImpaired from localStorage, default to false if not found
    const storedValue = localStorage.getItem("isHearingImpaired");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [soundAdjustment, setSoundAdjustment] = useState<number>(() => {
    // Load soundAdjustment from localStorage, default to 0 if not found
    const storedValue = localStorage.getItem("soundAdjustment");
    return storedValue ? JSON.parse(storedValue) : 0;
  });

  const [useDarkMode, setUseDarkMode] = useState<boolean>(() => {
    // Load useDarkMode from localStorage, default to false if not found
    const storedValue = localStorage.getItem("useDarkMode");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [useMagnifier, setUseMagnifier] = useState<boolean>(() => {
    // Load useMagnifier from localStorage, default to false if not found
    const storedValue = localStorage.getItem("useMagnifier");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [colorBlindness, setColorBlindness] = useState<colorBlindness>(() => {
    // Load colorBlindness from localStorage, default to 'none' if not found
    const storedValue = localStorage.getItem("colorBlindness");
    return storedValue ? (storedValue as colorBlindness) : "none";
  });

  useEffect(() => {
    // Save useEyes to localStorage whenever it changes
    localStorage.setItem("useEyes", JSON.stringify(useEyes));
  }, [useEyes]);

  useEffect(() => {
    // Save useFingers to localStorage whenever it changes
    localStorage.setItem("useFingers", JSON.stringify(useFingers));
  }, [useFingers]);

  useEffect(() => {
    // Save useVoice to localStorage whenever it changes
    localStorage.setItem("useVoice", JSON.stringify(useVoice));
  }, [useVoice]);

  useEffect(() => {
    // Save isHearingImpaired to localStorage whenever it changes
    localStorage.setItem(
      "isHearingImpaired",
      JSON.stringify(isHearingImpaired),
    );
  }, [isHearingImpaired]);

  useEffect(() => {
    // Save soundAdjustment to localStorage whenever it changes
    localStorage.setItem("soundAdjustment", JSON.stringify(soundAdjustment));
  }, [soundAdjustment]);

  useEffect(() => {
    // Save useDarkMode to localStorage whenever it changes
    localStorage.setItem("useDarkMode", JSON.stringify(useDarkMode));
  }, [useDarkMode]);

  useEffect(() => {
    // Save useMagnifier to localStorage whenever it changes
    localStorage.setItem("useMagnifier", JSON.stringify(useMagnifier));
  }, [useMagnifier]);

  useEffect(() => {
    // Save colorBlindness to localStorage whenever it changes
    localStorage.setItem("colorBlindness", colorBlindness);
  }, [colorBlindness]);

  return (
    <AccessibilityContext.Provider
      value={{
        useEyes,
        setUseEyes,
        useFingers,
        setUseFingers,
        useVoice,
        setUseVoice,
        isHearingImpaired,
        setHearingImpaired,
        soundAdjustment,
        setSoundAdjustment,
        useDarkMode,
        setUseDarkMode,
        useMagnifier,
        setUseMagnifier,
        colorBlindness,
        setColorBlindness,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
