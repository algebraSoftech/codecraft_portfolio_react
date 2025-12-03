import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText + text[index]);
        setIndex(index + 1);
      }, 100); // Adjust the speed of typing by changing the delay
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayText]);

  return (
    <motion.h1
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {displayText}
    </motion.h1>
  );
};

export default TypingText;
