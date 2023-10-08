import {
  FaceLandmarker,
  FilesetResolver,
  DrawingUtils,
} from "@mediapipe/tasks-vision";

type Area = "right" | "left" | "none";

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

export async function createFaceLandmarker() {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm",
  );
  console.log(new FilesetResolver());
  const res = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `./face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    //   runningMode,
    numFaces: 1,
  });

  faceMouse.faceLandmarker = res;
}

// realXY(x:number, y:number): number[] {
//     return [x * 1280, y * 720]
// }

function midpoint(coordinates: number[][]): number[] {
  console.log(coordinates, "TEST");
  let x_sum: number = 0;
  let y_sum: number = 0;
  for (let i = 0; i < coordinates.length; i++) {
    x_sum += coordinates[i].x;
    y_sum += coordinates[i].y;
  }
  console.log(x_sum, y_sum, "TEST3");
  return [x_sum / coordinates.length, y_sum / coordinates.length];
}

function calcLooking(centre: number[], pupil: number[]): Area {
  if (pupil[0] < centre[0] + 0.2) {
    return "right";
  } else if (pupil[0] > centre[0] + 0.2) {
    return "left";
  } else {
    return "none";
  }
}

export function isLooking(image: HTMLImageElement): Area {
  const faceLandmarkerResult = faceMouse.faceLandmarker.detect(image);
  const landmarkPoints = faceLandmarkerResult.faceLandmarks;
  console.log(landmarkPoints);
  const landmarks = landmarkPoints[0];
  console.log(landmarks);
  let centre: number[] = midpoint([
    landmarks[LandmarkNames.LEFT_UP_FIXED_POINT],
    landmarks[LandmarkNames.LEFT_DOWN_FIXED_POINT],
  ]);
  let pupil: number[] = [
    landmarks[LandmarkNames.PUPIL_LEFT_POINT_1].x,
    landmarks[LandmarkNames.PUPIL_LEFT_POINT_1].y,
  ];
  console.log("WE ARE HERE");
  return calcLooking(centre, pupil);
}
