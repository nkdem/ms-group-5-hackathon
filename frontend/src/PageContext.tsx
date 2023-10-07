import React, { useState } from "react";
import { createContext, useContext } from "react";

type Page = "home" | "characterSelection" | "animalModifier";
type PageContextProps = {
  currentPage: Page;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  animal: Animal | null;
  setAnimal: React.Dispatch<React.SetStateAction<Animal | null>>;
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
  return (
    <PageContext.Provider
      value={{ currentPage, setCurrentPage, animal, setAnimal }}
    >
      {children}
    </PageContext.Provider>
  );
};
