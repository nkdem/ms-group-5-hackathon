import React, { useState } from "react";
import { createContext, useContext } from "react";
import Animal from "../models/Animal";

const pages = [
  "home",
  "playExperience",
  "soundExperience",
  "visualExperience",
  "confirmSettings",
  "characterSelection",
  "animalModifier",
  "storySelector",
  "book",
] as const;

type Page = (typeof pages)[number];

type PageContextProps = {
  currentPage: Page;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  animal: Animal | null;
  setAnimal: React.Dispatch<React.SetStateAction<Animal | null>>;
  nextPage: () => void;
  previousPage: () => void;
};

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
};

export const PageContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [animal, setAnimal] = useState<Animal | null>(null);

  const nextPage = () => {
    const currentPageIndex = pages.indexOf(currentPage);
    setCurrentPage(pages[Math.min(currentPageIndex + 1, pages.length - 1)]);
  }

  const previousPage = () => {
    const currentPageIndex = pages.indexOf(currentPage);
    setCurrentPage(pages[Math.max(currentPageIndex - 1, 0)]);
  }

  return (
    <PageContext.Provider
      value={{ currentPage, setCurrentPage, animal, setAnimal, nextPage, previousPage }}
    >
      {children}
    </PageContext.Provider>
  );
};
