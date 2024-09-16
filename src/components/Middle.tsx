"use client";
import React from "react";
import { motion } from "framer-motion";

type MiddleProp = {
  children?: React.ReactNode;
};

const Middle = ({ children }: MiddleProp) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="h-[95vh] overflow-y-scroll hide-scrollbar sm:bg-[#ffffff] rounded-lg"
    >
      {children}
    </motion.div>
  );
};

export default Middle;
