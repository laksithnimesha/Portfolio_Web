"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] mx-auto">
      {/* Rotating SVG Circle */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full z-10"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="rgb(193, 167, 249)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: [
              "15 120 25 25",
              "16 25 92 72",
              "4 250 22 22",
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.svg>

      {/* Image fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="absolute top-0 left-0 w-full h-full mix-blend-lighten z-20"
      >
        <Image
          src="/assets/mood.png"
          alt="Portrait"
          fill
          priority
          quality={100}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
