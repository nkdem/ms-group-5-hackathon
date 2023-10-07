import { createContext, useContext, useState } from "react";

type BookContextType = {
  flipCount: number;
  flipForward: () => void;
  flipBackward: () => void;
  currentPage: number;
};

const bookCotext = createContext<BookContextType>({
  flipCount: 0,
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
  const [flipCount, setFlipCount] = useState(5)

  const flipForward = () => {
    setCurrentPage(p => Math.max(p - 1, 0))
    setFlipCount(f => f + 1);
  }

  const flipBackward = () => {
    setCurrentPage(p => Math.min(p + 1, 4))
    setFlipCount(f => f + 1);
  }

  return (
    <bookCotext.Provider value={{flipCount, flipForward, flipBackward, currentPage}}>
      {children}
    </bookCotext.Provider>
  );
}
