import { motion } from "framer-motion";
import { useRef } from "react";
import { useBook } from "./context/BookContext";

export default function Page({
  pageNumber,
  className,
}: {
  pageNumber: number;
  className: string;
}) {
  const frontRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);

  const { currentPage } = useBook();

  const flipped = currentPage > pageNumber;

  return (
    <>
      {/* Back */}
      <motion.div
        className={`flip " absolute right-0 aspect-[1/1.4] h-full rounded-xl ${className} page-${pageNumber}-back`}
        id={`page-${pageNumber}-back`}
        ref={backRef}
        animate={flipped ? "flipped" : "not_flipped"}
        initial={false} // Prevent animation on load
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
            backfaceVisibility: "hidden",
          },
        }}
      >
        {pageNumber} (back)
      </motion.div>

      {/* Front */}
      <motion.div
        className={`flip " absolute right-0 aspect-[1/1.4] h-full rounded-xl ${className}`}
        id={`page-${pageNumber}-front`}
        animate={flipped ? "flipped" : "not_flipped"}
        initial={false} // Prevent animation on load
        transition={{
          bounce: 0,
          duration: 0.8,
        }}
        variants={{
          not_flipped: {
            transformPerspective: "1800px",
            rotateY: 0,
            transformOrigin: "left",
            backfaceVisibility: "hidden",
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
      </motion.div>
    </>
  );
}
