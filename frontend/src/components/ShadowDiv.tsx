import { twMerge } from "tailwind-merge";

export default function ShadowDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge("shadowdiv bg-white", className)}>{children}</div>
  );
}
