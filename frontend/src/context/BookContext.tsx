import { createContext, useContext, useState } from "react";

type BookContextType = {
  flipForward: () => void;
  flipBackward: () => void;
  currentPage: number;
};

const bookCotext = createContext<BookContextType>({
  flipForward: () => {},
  flipBackward: () => {},
  currentPage: -1,
});

export const useBook = () => useContext(bookCotext);

export function BookContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipCount, setFlipCount] = useState(6);

  const flipBackward = () => {
    const newCurrentPage = Math.max(currentPage - 1, 0)
    setCurrentPage(newCurrentPage);
    setFlipCount((f) => f + 1);

    const currentPageElementFront = document.getElementById(`page-${newCurrentPage}-front`);
    const currentPageElementBack = document.getElementById(`page-${newCurrentPage}-back`);

    if (currentPageElementFront && currentPageElementBack) {
      currentPageElementFront.style.zIndex = flipCount + "";
      currentPageElementBack.style.zIndex = flipCount + "";
    }

  };

  const flipForward = () => {
    const newCurrentPage = Math.min(currentPage + 1, 5)
    setCurrentPage(newCurrentPage);
    setFlipCount((f) => f + 1);

    const currentPageElementFront = document.getElementById(`page-${currentPage}-front`);
    const currentPageElementBack = document.getElementById(`page-${currentPage}-back`);

    if (currentPageElementFront && currentPageElementBack) {
      currentPageElementFront.style.zIndex = flipCount + "";
      currentPageElementBack.style.zIndex = flipCount + "";
    }
  };

  return (
    <bookCotext.Provider
      value={{ flipForward, flipBackward, currentPage }}
    >
      {children}
    </bookCotext.Provider>
  );
}
