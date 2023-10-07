import React from "react";
import { usePageContext } from "./PageContext";

export default function HomePage() {
  const { setCurrentPage } = usePageContext();
  return (
    <div>
      {/* <img src='/chas-logo.png' className='bg-red-400' /> */}
      {/* make img appear in a rounded box with the img in center of the div  */}
      <div className="flex flex-col justify-around">
        <h1 className="flex justify-center text-6xl">Name TBD</h1>

        <button
          className="mx-auto rounded-xl border border-[#e8e2c8] bg-white px-24 py-24 shadow-2xl"
          onClick={() => setCurrentPage("characterSelection")}
        >
          CLICK ME
        </button>
      </div>
    </div>
  );
}
