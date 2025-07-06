"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface CardProps {
  title: string;
  imageSrc: string;
}

const Card = ({ title, imageSrc }: CardProps) => {
  return (
    <motion.div className="h-72 w-full flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <div className="relative flex-1 mb-2">
        <Image src={imageSrc} alt={title} fill className="object-cover rounded" />
      </div>
      <h1 className="font-heading text-white text-xl font-bold">{title}</h1>
    </motion.div>
  );
};

export default Card;
