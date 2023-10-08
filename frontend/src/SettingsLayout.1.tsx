import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import ShadowDiv from "./components/ShadowDiv";


export default function SettingsLayout() {
  return (
    <div className="mx-auto flex w-3/4 flex-col gap-y-4">
      <ShadowDiv className="bg-white px-4 py-4 text-center">
        <h1 className="">Your Play Experience</h1>
      </ShadowDiv>

      <hr className="h-[3px] rounded-full bg-[#d7c995]" />

      <div className="flex justify-between">
        <Button className="h-fit w-fit" onClick={previousPage}>
          <ArrowLeftIcon className="h-16 w-20 text-white" />
        </Button>
        <Button className="h-fit w-fit" onClick={nextPage}>
          <ArrowRightIcon className="h-16 w-20 text-white" />
        </Button>
      </div>
    </div>);
  div >
    ;
  ;
}
