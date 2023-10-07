import { useMemo } from "react";
import AnimalModifier from "./pages/AnimalModifier";
import CharacterSelection from "./pages/CharacterSelection";
import HomePage from "./pages/HomePage";
import { PageContextProvider, usePageContext } from "./context/PageContext";
import StorySelector from "./pages/StorySelector";
import Book from "./pages/Book";

export function App() {
  return (
    <PageContextProvider>
      <AppContent />
    </PageContextProvider>
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
    <>
      <button
        className="flex w-96 flex-row bg-slate-200"
        onClick={() => setCurrentPage("home")}
      >
        <img src="/chas-logo.png" className="mx-auto w-48 rounded-full" />
      </button>
      {component}
    </>
  );
}
