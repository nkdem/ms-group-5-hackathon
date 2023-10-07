import { BookContextProvider } from "../context/BookContext";
import Page from "../Page";

export default function Book() {
  return (
    <BookContextProvider>
      <div className="mx-4 my-16 flex w-full items-center justify-center">
        <div className="relative aspect-[1/0.7] h-[60vh] bg-red-50 shadow-2xl shadow-primary-300">
          <div className="absolute aspect-[1/1.4] h-full bg-neutral-300"></div>

          <Page pageNumber={4} className={`bg-red-300`} />
          <Page pageNumber={3} className={`bg-red-300`} />
          <Page pageNumber={2} className={`bg-blue-300`} />
          <Page pageNumber={1} className={`bg-green-300`} />
          <Page pageNumber={0} className={`bg-yellow-300`} />
        </div>
      </div>
    </BookContextProvider>
  );
}
