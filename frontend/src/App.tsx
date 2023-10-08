import { useMemo } from "react";
import AnimalModifier from "./pages/AnimalModifier";
import CharacterSelection from "./pages/CharacterSelection";
import HomePage from "./pages/HomePage";
import { PageContextProvider, usePageContext } from "./context/PageContext";
import StorySelector from "./pages/StorySelector";
import Book from "./pages/Book";
import PlayExperience from "./pages/PlayExperience";
import { AccessibilityContextProvider } from "./context/AccessibilityContext";

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
      <button
        className="mx-8 flex flex-row rounded-lg bg-white px-2 py-2 shadow-2xl shadow-primary-300"
        onClick={() => setCurrentPage("home")}
      >
        <img src="/chas-logo.png" className="mx-auto w-48 rounded-full" />
      </button>
      {component}
      {/* <PlayExperience /> */}
    </div>
  );
}
