import { useMemo } from "react";
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

export function App() {
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

  const component = useMemo(() => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
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
        return <p>Null</p>;
    }
  }, [currentPage]);
  return (
    <div className="pt-4">
      {component}
      {/* <PlayExperience /> */}
    </div>
  );
}
