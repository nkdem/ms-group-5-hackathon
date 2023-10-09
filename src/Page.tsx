import { motion } from "framer-motion";
import { useBook } from "./context/BookContext";
import { usePageContext } from "./context/PageContext";

export default function Page({
  pageNumber,
  className,
  front,
  back,
  backContent,
  frontContent,
}: {
  pageNumber: number;
  className: string;
  front: string;
  back: string;
  backContent: string | null;
  frontContent: string | null;
}) {
  const { currentPage } = useBook();

  const flipped = currentPage > pageNumber;

  const { animal } = usePageContext();

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
        <div className="absolute bottom-0 rounded-b-lg bg-white px-2 text-xs font-bold uppercase text-[#322903]">
          <p>{backContent}</p>
          {/* <p>{`{animal.name} walked across the field to see three crows sat upon a fence.`}</p> */}
        </div>
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
        <div className="absolute bottom-0 rounded-b-lg bg-white px-2 text-xs font-bold uppercase text-[#322903]">
          {/* <p>{`On a cold, frosty mroning, ${animal.name} the ${animal.name} woke up and wanted to go out`}</p> */}
          {/* <p>{`${animal.name} walked across the field to see three crows sat upon a fence.`}</p> */}
          <p>{frontContent}</p>
        </div>
      </motion.div>
    </>
  );
}
