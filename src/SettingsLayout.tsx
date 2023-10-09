import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import ShadowDiv from "./components/ShadowDiv";
import { usePageContext } from "./context/PageContext";

export default function SettingsLayout({
  title,
  children,
  nextCustom,
  previousCustom,
}: {
  title: string;
  children: React.ReactNode;
  nextCustom?: () => void;
  previousCustom?: () => void;
}) {
  const { nextPage, previousPage } = usePageContext();
  return (
    <div className="mx-auto flex h-full w-full flex-col gap-4 px-20 py-10">
      <ShadowDiv className="bg-white px-4 py-4 text-center">
        <h1>{title}</h1>
      </ShadowDiv>

      {children}

      <div className="mt-auto">
        <hr className="my-3 h-[3px] rounded-full bg-[#d7c995]" />
        <div className="mt-auto flex items-end justify-between">
          <Button
            className="h-fit w-fit"
            onClick={previousCustom ? previousCustom : previousPage}
          >
            <ArrowLeftIcon className="h-16 w-20 text-white" />
          </Button>
          <Button
            className="h-fit w-fit"
            onClick={nextCustom ? nextCustom : nextPage}
          >
            <ArrowRightIcon className="h-16 w-20 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
