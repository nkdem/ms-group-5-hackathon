import { twMerge } from "tailwind-merge";

export default function ShadowDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "shadowdiv rounded-xl border-4 border-[#d7c995] bg-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
