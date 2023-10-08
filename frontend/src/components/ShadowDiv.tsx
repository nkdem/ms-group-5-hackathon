import { twMerge } from "tailwind-merge";

export default function ShadowDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {

  return (
    <div className={twMerge("shadowdiv rounded-xl border-[#d7c995] border-4 bg-white", className)}>{children}</div>
  );
}
