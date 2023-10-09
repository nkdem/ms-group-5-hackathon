import ShadowDiv from "./ShadowDiv";
import { twMerge } from "tailwind-merge";
import { CheckIcon } from "@heroicons/react/20/solid";

type Props = {
  checked: boolean;
  onChange: () => void;
};

export default function Checkbox({ checked, onChange }: Props) {
  return (
    <button onClick={onChange}>
      <ShadowDiv
        className={twMerge(
          "h-14 w-14 rounded-2xl transition-all",
          checked ? "!bg-secondary-600" : "bg-white",
        )}
      >
        <CheckIcon
          className={twMerge(
            checked ? "text-white" : "text-white dark:text-[#4a463c]",
          )}
        />
      </ShadowDiv>
    </button>
  );
}
