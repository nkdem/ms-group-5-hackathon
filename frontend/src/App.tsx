import { useCallback, useMemo, useRef } from "react";
import AnimalModifier from "./pages/AnimalModifier";
import CharacterSelection from "./pages/CharacterSelection";
import HomePage from "./pages/HomePage";
import { PageContextProvider, usePageContext } from "./context/PageContext";
import StorySelector from "./pages/StorySelector";
import Book from "./pages/Book";
import { AccessibilityContextProvider } from "./context/AccessibilityContext";
import SoundExperience from "./pages/SoundExperience";
import VisualExperience from "./pages/VisualExperience";
import PlayExperience from "./pages/PlayExperience";
import ConfirmSettings from "./pages/ConfirmSettings";
import Webcam from "react-webcam";
import { createFaceLandmarker, faceMouse, isLooking } from "./utils/FaceMouse";

export function App() {
  // webrtc reqquest camera
  return (
    <AccessibilityContextProvider>
      <PageContextProvider>
        <AppContent />
      </PageContextProvider>
    </AccessibilityContextProvider>
  );
}

function AppContent() {
  const { currentPage, setCurrentPage } = usePageContext();
  const webcamRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    const img = new Image();
    img.src = imageSrc || "";
    document.body.appendChild(img);
    createFaceLandmarker().then(() => {
      alert(isLooking(img));
    });
  }, [webcamRef]);

  const component = useMemo(() => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "playExperience":
        return <PlayExperience />;
      case "soundExperience":
        return <SoundExperience />;
      case "visualExperience":
        return <VisualExperience />;
      case "confirmSettings":
        return <ConfirmSettings />;
      case "characterSelection":
        return <CharacterSelection />;
      case "animalModifier":
        return <AnimalModifier />;
      case "storySelector":
        return <StorySelector />;
      case "book":
        return <Book />;
      default:
        return <p>Null!!!</p>;
    }
  }, [currentPage]);
  return (
    <div className="pt-4">
      {component}
      <div className="flex">
        <Webcam
          className="w-1/2"
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: "user" }}
        />
        <button onClick={capture}>Capture photo</button>
      </div>
    </div>
  );
}
