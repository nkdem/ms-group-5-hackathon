import React from "react";
import { usePageContext } from "../context/PageContext";
import ShadowDiv from "../components/ShadowDiv";

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

      <ShadowDiv>
        <button onClick={() => goToStory(undefined)}>Random!</button>
      </ShadowDiv>

      <div className="mx-8 flex flex-row flex-wrap justify-evenly gap-x-8">
        {stories.map((story) => (
          <button
            className="h-64 w-64 rounded-lg bg-accent4-300"
            onClick={() => goToStory(story)}
          >
            Story {story}
          </button>
        ))}
      </div>
    </div>
  );
}
