import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar: React.FC<{ containerRef: React.RefObject<HTMLElement> }> = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#aa0494] via-[#ba0bc6] to-[#f028fe] origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;