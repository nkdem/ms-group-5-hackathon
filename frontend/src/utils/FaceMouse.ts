//Import mediapipe
import vision from "@mediapipe/tasks-vision";
const { FaceLandmarker, FilesetResolver, DrawingUtils } = vision;


type Area = "right" | "left" | "none";

enum LandmarkNames {
    LEFT_UP_FIXED_POINT =    145,
    LEFT_DOWN_FIXED_POINT =  159,
    RIGHT_UP_FIXED_POINT =   386,
    RIGHT_DOWN_FIXED_POINT = 374,
    PUPIL_LEFT_POINT_1 =     468, //Actual Pupil
    PUPIL_LEFT_POINT_2 =     469,
    PUPIL_LEFT_POINT_3 =     470,
    PUPIL_LEFT_POINT_4 =     471,
    PUPIL_LEFT_POINT_5 =     472,
    PUPIL_RIGHT_POINT_1 =    473, //Actual Pupil
    PUPIL_RIGHT_POINT_2 =    474,
    PUPIL_RIGHT_POINT_3 =    475,
    PUPIL_RIGHT_POINT_4 =    476,
    PUPIL_RIGHT_POINT_5 =    477,
}


class FaceMouse{
    areaLookedAt: Area;
    centre: number[];
    pupilCoordinates: number[];
    faceLandmarker: FaceLandmarker;

    async createFaceLandmarker() {
        /*
        const filesetResolver = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
        );
        */
        this.faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
          baseOptions: {
            modelAssetPath: `./face_landmarker.task`,
            delegate: "GPU"
          },
          outputFaceBlendshapes: true,
          runningMode,
          numFaces: 1
        });
    }
    constructor(){
        this.areaLookedAt = "none"
        this.centre = [0,0]
        this.pupilCoordinates = [0,0]
        this.createFaceLandmarker()
    }

    realXY(x:number, y:number): number[] {
        return [x * 1280, y * 720]  
    }

    midpoint(coordinates: number[][]): number[] {
        let x_sum: number = 0;
        let y_sum: number = 0;
        for (let i = 0; i < coordinates.length; i++) {
            x_sum += coordinates[i][0]
            y_sum += coordinates[i][1]
        }
        return [x_sum / coordinates.length, y_sum / coordinates.length]    
    }

    calcLooking(centre: number[], pupil: number[]): Area {
        if (pupil[0] < centre[0]) {
            return "left"
        } else if (pupil[0] > centre[0]) {
            return "right"
        } else {
            return "none"
        }
    }

    isLooking(image: HTMLImageElement): Area {
        const faceLandmarkerResult = this.faceLandmarker.detect(image);
        const landmarkPoints = faceLandmarkerResult.faceLandmarks;
        const landmarks = landmarkPoints[0].landmark;
        let centre: number[] = this.midpoint([landmarks[LandmarkNames.LEFT_UP_FIXED_POINT], landmarks[LandmarkNames.LEFT_DOWN_FIXED_POINT]]);
        let pupil: number[] = [landmarks[landmarkPoints.PUPIL_LEFT_POINTS_1].x, landmarks[landmarkPoints.PUPIL_LEFT_POINTS_1].y];
        return this.calcLooking(centre, pupil)
    }
    


}