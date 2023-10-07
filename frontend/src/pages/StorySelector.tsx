import React from "react";
import { usePageContext } from "../context/PageContext";

export default function StorySelector() {
  const stories = [0, 1, 2];
  const { setCurrentPage } = usePageContext();

  function goToStory(selected: number | undefined) {
    const story = selected
      ? selected
      : Math.floor(Math.random() * stories.length);
    setCurrentPage("book");
  }

  return (
    <div className="mx-8 mt-4 flex h-full flex-col gap-y-2">
      <h2 className="flex justify-center text-4xl">
        Choose your story experience!
      </h2>
      <h3 className="flex justify-center text-xl">Or choose a random one!</h3>

      <button
        className="rounded-lg bg-yellow-300 py-4"
        onClick={() => goToStory(undefined)}
      >
        Random!
      </button>

      <div className="mx-8 flex flex-row flex-wrap justify-evenly gap-x-8">
        {stories.map((story) => (
          <button
            className="h-64 w-64 rounded-lg bg-blue-400"
            onClick={() => goToStory(story)}
          >
            Story {story}
          </button>
        ))}
      </div>
    </div>
  );
}
