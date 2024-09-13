"use client";

import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

const mapRange = (
  inputLower: number,
  inputUpper: number,
  outputLower: number,
  outputUpper: number
) => {
  const InputRange = inputUpper - inputLower;
  const OutputRange = outputUpper - outputLower;

  return (value: number): number =>
    outputLower + (((value - inputLower) / InputRange) * OutputRange || 0);
};

const setTranform = (
  item: HTMLElement & EventTarget,
  event: React.PointerEvent,
  x: MotionValue,
  y: MotionValue
) => {
  const bounds = item.getBoundingClientRect();
  const relativeX = event.clientX - bounds.left;
  const relativeY = event.clientY - bounds.top;

  const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
  const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
  x.set(xRange * 20);
  y.set(yRange * 20);
  // console.log(xRange);
};

const Button = ({ className, onClick, children }: ButtonProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const textX = useTransform(x, (latest) => latest * 0.5);
  const textY = useTransform(y, (latest) => latest * 0.5);
  return (
    <motion.span
      onPointerMove={(event) => {
        const item = event.currentTarget;
        setTranform(item, event, x, y);
      }}
      onPointerLeave={(event) => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      // onClick={onClick}
      className={`${className} rounded-full size-20 flex justify-center items-center font-medium text-md transition-all   ease-out relative hover:text-white Swipe overflow-hidden`}
    >
      <motion.span style={{ x: textX, y: textY }}>{children}</motion.span>
    </motion.span>
  );
};

export default Button;
