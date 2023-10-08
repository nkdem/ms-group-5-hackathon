import { useAccessibilityContext } from "../context/AccessibilityContext";
import { usePageContext } from "../context/PageContext";

export default function ConfirmSettings() {
  const { useEyes } = useAccessibilityContext();
  const { setCurrentPage } = usePageContext();
  return (
    <div className="mx-auto flex w-3/4 flex-col">
      <div>useEyes: {useEyes ? "true" : "false"}</div>
      <div className="flex justify-end">
        <button
          className="bg-red-500"
          onClick={() => {
            setCurrentPage("characterSelection");
          }}
        >
          select
        </button>
      </div>
    </div>
  );
}
