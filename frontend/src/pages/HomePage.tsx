import React from "react";
import { usePageContext } from "../context/PageContext";
import Marquee from "react-fast-marquee";
import ShadowDiv from "../components/ShadowDiv";

export default function HomePage() {
  const { setCurrentPage } = usePageContext();
  return (
    <div className="flex flex-col justify-around">
      <ShadowDiv className="w-fit">
        <button
          className="mx-8 flex flex-row rounded-lg bg-white px-2 py-2 shadow-2xl shadow-primary-300"
          onClick={() => setCurrentPage("home")}
        >
          <img src="/chas-logo.png" className="mx-auto w-48 rounded-full" />
        </button>
      </ShadowDiv>

      <h1 className="flex justify-center text-6xl">Name TBD</h1>

      <button
        className="mx-auto my-8 flex-1 rounded-xl border border-secondary-400 bg-secondary-200 px-24 py-24 shadow-2xl shadow-secondary-400"
        onClick={() => setCurrentPage("characterSelection")}
      >
        CLICK ME
      </button>

      <Marquee className="mx-auto" direction="right">
        <h1>Animal 1</h1>
        <h1>Animal 3</h1>
      </Marquee>
    </div>
  );
}
