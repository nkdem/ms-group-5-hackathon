import { motion } from "framer-motion";
import { useRef } from "react";
import { useBook } from "./BookContext";

export default function Page({
  pageNumber,
  className,
}: {
  pageNumber: number;
  className: string;
}) {
  const frontRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);

  const { flipForward, flipBackward, currentPage, flipCount } = useBook();

  const flipped = currentPage > pageNumber;

  const handleClick = () => {
    const front = frontRef.current;
    const back = backRef.current;
    if (front === null || back === null) return;

    front.style.zIndex = flipCount + "";
    back.style.zIndex = flipCount + "";

    if (flipped) {
      flipForward();
    } else {
      flipBackward();
    }
  };

  return (
    <>
      {/* Back */}
      <motion.button
        className={`flip " absolute right-0 aspect-[1/1.4] h-full ${className}`}
        onClick={handleClick}
        ref={backRef}
        animate={flipped ? "flipped" : "not_flipped"}
        transition={{
          bounce: 0,
          duration: 0.8,
        }}
        variants={{
          not_flipped: {
            transformPerspective: "1800px",
            rotateY: "180deg",
            translateX: "-100%",
            transformOrigin: "right",
            backfaceVisibility: "hidden",
          },
          flipped: {
            transformPerspective: "1800px",
            translateX: "-100%",
            rotateY: 0,
            transformOrigin: "right",
          },
        }}
      >
        {pageNumber} (back)
      </motion.button>

      {/* Front */}
      <motion.button
        className={`flip " absolute right-0 aspect-[1/1.4] h-full ${className}`}
        onClick={handleClick}
        ref={frontRef}
        animate={flipped ? "flipped" : "not_flipped"}
        transition={{
          bounce: 0,
          duration: 0.8,
        }}
        variants={{
          not_flipped: {
            transformPerspective: "1800px",
            rotateY: 0,
            transformOrigin: "left",
          },
          flipped: {
            transformPerspective: "1800px",
            rotateY: "-180deg",
            transformOrigin: "left",
            backfaceVisibility: "hidden",
          },
        }}
      >
        {pageNumber} (front)
      </motion.button>
    </>
  );
}
