import { BookContextProvider } from "./BookContext";
import Page from "./Page";

export default function App() {
  return (
    <BookContextProvider>
      <div className="flex h-[100vh] w-full items-center justify-center">
        <div className="relative aspect-[1/0.7] h-[90vh] bg-red-50 shadow-2xl">
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
