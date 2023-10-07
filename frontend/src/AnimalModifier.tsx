import React from "react";
import { usePageContext } from "./PageContext";

export default function AnimalModifier() {
  const { animal } = usePageContext();
  if (!animal) {
    throw new Error("Animal must be set before AnimalModifier can be rendered");
  }
  return <div>{animal.name}</div>;
}
