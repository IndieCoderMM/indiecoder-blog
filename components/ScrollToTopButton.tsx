'use client';

import { PiArrowFatLineUpBold } from 'react-icons/pi';
import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from 'framer-motion';
import { useEffect } from 'react';

const isBrowser = () => typeof window !== 'undefined';

const scrollToTop = () => {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
};

const ScrollToTopButton = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.1) {
        controls.start('show');
      } else {
        controls.start('hide');
      }
    });
  });
  return (
    <motion.button
      className="fixed bottom-5 right-3 z-50 bg-white text-slate-500 hover:bg-accent-color hover:text-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
      onClick={scrollToTop}
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
    >
      <PiArrowFatLineUpBold />
    </motion.button>
  );
};

export default ScrollToTopButton;
