"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

const imgs = [
  "https://images.pexels.com/photos/11945527/pexels-photo-11945527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7518749/pexels-photo-7518749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7973045/pexels-photo-7973045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/14443339/pexels-photo-14443339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5192317/pexels-photo-5192317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7928074/pexels-photo-7928074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const ONE_SECOND = 800;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const Hero = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <section className=" overflow-hidden w-full max-w-5xl mx-auto h-[24rem] mt-8 relative">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="w-full h-full flex"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      <div className="absolute w-full h-full bg-gradient-to-t from-transparent to-slate-950 z-50 top-0 left-0" />
    </section>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            animate={{
              scale: imgIndex === idx ? 1 : 1,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full h-full shrink-0"
          >
            <Image
              src={imgSrc}
              alt="Hero Images"
              width={1500}
              height={1500}
              quality={100}
              className="object-cover w-full h-full object-center"
            />
          </motion.div>
        );
      })}
    </>
  );
};
