import { useEffect, useState } from "react";
import ShadowDiv from "./ShadowDiv";
import {twMerge} from 'tailwind-merge'
import { CheckIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

type Props = {
  checked: boolean;
  onChange: () => void;
};

export default function Checkbox({checked, onChange }: Props) {
  return (
    <button onClick={onChange}>
        <ShadowDiv className={twMerge("w-16 h-16 transition-all rounded-2xl",  checked ? "bg-secondary-600" : "bg-white")}>
        <CheckIcon className="text-white"/>
      </ShadowDiv>
    </button>
  )
}
