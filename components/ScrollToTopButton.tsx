'use client';

import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from 'framer-motion';
import { useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

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
      className="fixed bottom-3 right-3 z-50 border border-slate-100 bg-white text-slate-500 hover:bg-accent-color hover:text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
      onClick={scrollToTop}
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
    >
      <ArrowUpIcon className="w-8 h-8" />
    </motion.button>
  );
};

export default ScrollToTopButton;
