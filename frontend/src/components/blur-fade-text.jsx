import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BlurFadeText = ({
  text,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 8,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  characterDelay = 0.03,
  ...props
}) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin,
  });
  const isInView = !inView || inViewResult;

  const defaultVariants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;

  const words = text.split(" ");

  return (
    <div ref={ref} className={className} {...props}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="hidden"
          variants={combinedVariants}
          transition={{
            delay: delay + wordIndex * characterDelay,
            duration,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{
            marginRight: wordIndex < words.length - 1 ? "0.25rem" : "0",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurFadeText;
