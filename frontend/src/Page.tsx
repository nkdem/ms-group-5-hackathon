import { motion } from "framer-motion";
import { useBook } from "./context/BookContext";

export default function Page({
  pageNumber,
  className,
  front,
  back,
}: {
  pageNumber: number;
  className: string;
  front: string;
  back: string;
}) {
  const { currentPage } = useBook();

  const flipped = currentPage > pageNumber;

  return (
    <>
      {/* Back */}
      <motion.div
        className={`flip absolute right-0 aspect-[1.4/1] h-full rounded-xl ${className} page-${pageNumber}-back bg-[url('/${back}')]`}
        style={{
          backgroundImage: `url(/${back})`,
        }}
        id={`page-${pageNumber}-back`}
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
      </motion.div>

      {/* Front */}
      <motion.div
        className={`flip " absolute right-0 aspect-[1.4/1] h-full rounded-xl ${className} bg-[url('/${front}')]`}
        id={`page-${pageNumber}-front`}
        animate={flipped ? "flipped" : "not_flipped"}
        initial={false} // Prevent animation on load
        style={{
          backgroundImage: `url(/${front})`,
        }}
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
      </motion.div>
    </>
  );
}
