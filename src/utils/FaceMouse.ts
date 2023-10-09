import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

export type Area = "right" | "left" | "none";

export enum LandmarkNames {
  LEFT_UP_FIXED_POINT = 145,
  LEFT_DOWN_FIXED_POINT = 159,
  RIGHT_UP_FIXED_POINT = 386,
  RIGHT_DOWN_FIXED_POINT = 374,
  PUPIL_LEFT_POINT_1 = 468, //Actual Pupil
  PUPIL_LEFT_POINT_2 = 469,
  PUPIL_LEFT_POINT_3 = 470,
  PUPIL_LEFT_POINT_4 = 471,
  PUPIL_LEFT_POINT_5 = 472,
  PUPIL_RIGHT_POINT_1 = 473, //Actual Pupil
  PUPIL_RIGHT_POINT_2 = 474,
  PUPIL_RIGHT_POINT_3 = 475,
  PUPIL_RIGHT_POINT_4 = 476,
  PUPIL_RIGHT_POINT_5 = 477,
}

export const faceMouse = {
  areaLookedAt: "none" as Area,
  centre: [0, 0],
  pupilCoordinates: [0, 0],
  faceLandmarker: null as FaceLandmarker | null,
};

let isInitiaising = false;
let isInitialised = false;
export async function createFaceLandmarker() {
  if (isInitiaising && !isInitialised) {
    return;
  }
  if (isInitialised) {
    return;
  }
  isInitiaising = true;
  console.log("rnning the init");
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm",
  );
  const res = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `./face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    numFaces: 1,
  });
  faceMouse.faceLandmarker = res;
  isInitialised = true;
  isInitiaising = false;
}

function midpoint(coordinates: number[][]): number[] {
  let x_sum: number = 0;
  let y_sum: number = 0;
  for (let i = 0; i < coordinates.length; i++) {
    x_sum += coordinates[i].x;
    y_sum += coordinates[i].y;
  }
  return [x_sum / coordinates.length, y_sum / coordinates.length];
}

function calcLooking(centre: number[], pupil: number[]): Area {
  if (0.004 + pupil[0] < centre[0]) {
    return "right";
  } else if (pupil[0] > centre[0] + 0.004) {
    return "left";
  } else {
    return "none";
  }
}

export function isLooking(image: HTMLImageElement): Area {
  if (isInitiaising && !isInitialised) {
    console.log("INFO: Initialising");
    return "none";
  }

  const faceLandmarkerResult = faceMouse.faceLandmarker.detect(image);
  const landmarkPoints = faceLandmarkerResult.faceLandmarks;
  const landmarks = landmarkPoints[0];

  if (!landmarks) {
    return "none";
  }

  const centre: number[] = midpoint([
    landmarks[LandmarkNames.LEFT_UP_FIXED_POINT],
    landmarks[LandmarkNames.LEFT_DOWN_FIXED_POINT],
  ]);

  const pupil: number[] = [
    landmarks[LandmarkNames.PUPIL_LEFT_POINT_1].x,
    landmarks[LandmarkNames.PUPIL_LEFT_POINT_1].y,
  ];
  // console.log("WE ARE HERE");
  return calcLooking(centre, pupil);
}
