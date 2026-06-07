import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';

/**
 * Returns a spring-smoothed parallax `y` MotionValue for a section element.
 * @param speed  How fast the parallax moves relative to scroll. Negative = moves up as you scroll down.
 */
export function useParallax(
  speed: number = -0.2,
  externalRef?: React.RefObject<HTMLElement | null>
): {
  ref: React.RefObject<HTMLElement | null>;
  y: MotionValue<number>;
} {
  const internalRef = useRef<HTMLElement>(null);
  const ref = externalRef || internalRef;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, speed * 300]);

  const y = useSpring(rawY, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return { ref, y };
}
