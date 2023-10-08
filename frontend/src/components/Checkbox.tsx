import { useEffect, useState } from "react";
import ShadowDiv from "./ShadowDiv";
import {twMerge} from 'tailwind-merge'
import { CheckIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function Checkbox(props: Props) {
  const {checked, onChange } = props;
  useEffect(() => {
    props.onChange(checked);
  }, [checked]);

  return (
    <button onClick={() => on}>
        <ShadowDiv className={twMerge("w-16 h-16",  checked ? "bg-secondary-600" : "bg-white")}>
        <CheckIcon className="text-white"/>
      </ShadowDiv>
    </button>
  )
}
