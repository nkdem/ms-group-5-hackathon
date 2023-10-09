import React from "react";
import { usePageContext } from "../context/PageContext";
import ShadowDiv from "../components/ShadowDiv";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import SettingsLayout from "../SettingsLayout";

type StoryCoverType = string | null;

type Story = {
  name: string;
  cover: StoryCoverType;
};

export default function StorySelector() {
  const stories: Story[] = [
    {
      name: "The Three Crows",
      cover: "frontcover.png",
    },
    {
      name: "Story 2",
      cover: null,
    },
    {
      name: "Story 3",
      cover: null,
    },
    {
      name: "Story 4",
      cover: null,
    },
    {
      name: "Story 5",
      cover: null,
    },
    {
      name: "Random",
      cover: "question_mark",
    },
  ];
  const { setCurrentPage } = usePageContext();

  return (
    <SettingsLayout title="choose your story experience!">
      <div className="mx-8 flex flex-row flex-wrap justify-evenly gap-x-8">
        {stories.map((story) => (
          <button
            key={story.name}
            className="h-64 w-64 rounded-lg"
            onClick={() => setCurrentPage("book")}
          >
            <div className="flex h-[192px] w-64 flex-col">
              {story.cover ? (
                story.cover === "question_mark" ? (
                  <div className="flex h-full w-full justify-center rounded-lg bg-gray-400 ">
                    <div className="flex flex-col justify-center">
                      <QuestionMarkCircleIcon className="h-32 w-32 rounded-lg text-primary-200" />
                    </div>
                  </div>
                ) : (
                  <img className="h-full w-full rounded-lg" src={story.cover} />
                )
              ) : (
                <div className="h-full w-full rounded-lg bg-gray-400"></div>
              )}

              <h3 className="text-xl">{story.name}</h3>
            </div>
          </button>
        ))}
      </div>
    </SettingsLayout>
  );
}
