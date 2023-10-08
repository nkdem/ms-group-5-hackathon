import { twMerge } from "tailwind-merge";

export default function Button({ children, onClick, className }: { children: React.ReactNode, onClick: () => void, className?: string }) {
  return <button onClick={onClick} className={twMerge("bg-secondary-500 rounded-xl", className)}>{children}</button>;
}
