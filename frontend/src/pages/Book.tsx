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
      <div className="flex flex-col gap-y-4 py-8">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative aspect-[1/0.7] h-[60vh] shadow-primary-300">
            <Page pageNumber={4} className={`bg-red-300`} />
            <Page pageNumber={3} className={`bg-red-300`} />
            <Page pageNumber={2} className={`bg-blue-300`} />
            <Page pageNumber={1} className={`bg-green-300`} />
            <Page pageNumber={0} className={`bg-yellow-300`} />
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={getAnimalUrlWithHat(animal)}
            className="absolute bottom-0 right-[370px] h-64 w-64"
          />
        </div>
        <div className="absolute bottom-0 flex w-full justify-between gap-5 text-5xl text-white">
          <Button className="p-5 uppercase" onClick={flipBackward}>
            previous page
          </Button>
          <Button className="p-5 uppercase" onClick={flipForward}>
            next page
          </Button>
        </div>

        {useEyes && (
          <Webcam
            className="absolute top-0 h-[480px] w-[640px] opacity-0"
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: "user" }}
          />
        )}
      </div>
    </>
  );
}
