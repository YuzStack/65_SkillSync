import { animate } from 'motion';
import {
  useMotionValue,
  useTransform,
  // eslint-disable-next-line
  motion,
} from 'motion/react';
import { useEffect, useState } from 'react';

export default function MatchScoreCounter({ targetValue }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Animate from 0 to the target over 2 seconds
    animate(count, targetValue, { duration: 2 });

    // Update local state to trigger re-render
    return rounded.onChange(v => setDisplayValue(v));
  }, [targetValue, count, rounded]);

  return <motion.span className='text-theme'>{displayValue}%</motion.span>;
}
