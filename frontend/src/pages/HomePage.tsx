import React from "react";
import { usePageContext } from "../context/PageContext";
import Marquee from "react-fast-marquee";

export default function HomePage() {
  const { setCurrentPage } = usePageContext();
  return (
    <div className="flex flex-col justify-around">
      <h1 className="flex justify-center text-6xl">Name TBD</h1>

      <button
        className="mx-auto flex-1 rounded-xl border border-[#e8e2c8] bg-white px-24 py-24 shadow-2xl shadow-primary-300"
        onClick={() => setCurrentPage("characterSelection")}
      >
        CLICK ME
      </button>

      <Marquee className="mx-auto bg-red-400" direction="right">
        <h1>Animal 1</h1>
        <h1>Animal 2</h1>
        <h1>Animal 3</h1>
      </Marquee>
    </div>
  );
}
