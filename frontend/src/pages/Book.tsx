import { BookContextProvider, useBook } from "../context/BookContext";
import Page from "../Page";

export default function Book() {
  const { flipForward, flipBackward } = useBook();

  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative aspect-[1/0.7] h-[60vh] shadow-primary-300">
          <Page pageNumber={4} className={`bg-red-300`} />
          <Page pageNumber={3} className={`bg-red-300`} />
          <Page pageNumber={2} className={`bg-blue-300`} />
          <Page pageNumber={1} className={`bg-green-300`} />
          <Page pageNumber={0} className={`bg-yellow-300`} />
        </div>
      </div>
      <div className="absolute bottom-0 flex gap-5">
        <button onClick={flipForward}>flipForward</button>
        <button onClick={flipBackward}>flipBackward</button>
      </div>
    </>
  );
}
