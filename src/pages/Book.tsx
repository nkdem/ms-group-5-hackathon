import { useRef } from "react";
import { useBook } from "../context/BookContext";
import Page from "../Page";
import { useInterval } from "../useInterval";
import Webcam from "react-webcam";
import { Area, createFaceLandmarker, isLooking } from "../utils/FaceMouse";
import Button from "../Button";
import { usePageContext } from "../context/PageContext";
import { getAnimalUrlWithHat } from "../models/Animal";
import { useAccessibilityContext } from "../context/AccessibilityContext";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const POLLING_INTERVAL = 200;
const FLIP_THRESHOLD = 3000;
const POLLING_THRESHOLD = FLIP_THRESHOLD / POLLING_INTERVAL;

let areaBuffer: Area[] = [];

export default function Book() {
  const { flipForward, flipBackward } = useBook();
  const webcamRef = useRef<Webcam>(null);

  const { animal } = usePageContext();

  const {
    settings: { useEyes },
  } = useAccessibilityContext();
  useInterval(() => {
    if (!useEyes) return;
    const imageSrc = webcamRef.current?.getScreenshot();
    const img = new Image();
    if (!imageSrc) {
      return;
    }
    img.src = imageSrc;
    img.width = 320;
    img.height = 240;

    createFaceLandmarker().then(() => {
      const area = isLooking(img);
      console.log(area);

      if (areaBuffer.length !== 0) {
        if (areaBuffer[areaBuffer.length - 1] != area) {
          areaBuffer = [];
        }
      }

      if (area !== "none") {
        areaBuffer.push(area);
      }

      if (areaBuffer.length >= POLLING_THRESHOLD) {
        if (
          areaBuffer.every(
            (p) => (p === areaBuffer[0] && p === "left") || p === "right",
          )
        ) {
          if (areaBuffer[0] === "right") {
            flipForward();
          } else {
            flipBackward();
          }
        }
        areaBuffer = [];
      }
    });
  }, POLLING_INTERVAL);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-4 py-8">
        <div className="relative aspect-[1.4/1] w-[45%] translate-x-[50%] shadow-primary-300">
          <Page
            pageNumber={2}
            className={`bg-neutral-300 bg-cover`}
            front="PG4.png"
            back="PG5.png"
          />
          <Page
            pageNumber={1}
            className={`bg-neutral-300 bg-cover`}
            front="PG2.png"
            back="PG3.png"
          />
          <Page
            pageNumber={0}
            className={`bg-neutral-300 bg-cover`}
            front="PG.png"
            back="PG1.png"
          />
        </div>

        <img
          src={getAnimalUrlWithHat(animal)}
          className="absolute bottom-0 left-[50%] h-64 translate-x-[-50%]"
        />

        <div className="absolute bottom-0 flex w-full justify-between gap-5 p-5 text-5xl text-white">
          <Button className="p-5 uppercase" onClick={flipBackward}>
            <ArrowLeftIcon className="h-10 w-10" />
          </Button>
          <Button className="p-5 uppercase" onClick={flipForward}>
            <ArrowRightIcon className="h-10 w-10" />
          </Button>
        </div>

        {useEyes && (
          <Webcam
            className="absolute left-0 top-0 h-[10rem] opacity-0"
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: "user" }}
          />
        )}
      </div>
    </>
  );
}
