"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GridImageProps {
  title: string;
  leftImageSrc: string;
  rightImageSrc?: string;
}

const GridImage = ({ title, leftImageSrc, rightImageSrc }: GridImageProps) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 w-full max-w-7xl">
      <div className="relative aspect-[4/3]">
        <motion.div className="w-full h-full relative" initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
          <Image src={leftImageSrc} alt={`${title} - left image`} fill className="object-cover rounded" />
        </motion.div>
      </div>
      <div className="relative aspect-[4/3]">
        <motion.div className="w-full h-full relative" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
          <Image src={rightImageSrc || leftImageSrc} alt={`${title} - right image`} fill className="object-cover rounded" />
        </motion.div>
      </div>
    </div>
  );
};

export default GridImage;
