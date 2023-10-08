import { twMerge } from "tailwind-merge";

export default function ShadowDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={twMerge("bg-primary-100 shadowdiv", className)}>{children}</div>;
}
