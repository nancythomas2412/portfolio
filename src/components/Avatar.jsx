import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import hairImg from "../assets/hair.webp";
import headImg from "../assets/head.webp";
import neckImg from "../assets/neck.webp";
import scleraL from "../assets/whiteL.webp";
import eyeLImg from "../assets/eyeL.webp";
import scleraR from "../assets/whiteR.webp";
import eyeRImg from "../assets/eyeR.webp";
import eyebrowsImg from "../assets/eyebrows.webp";

const MAX_EYE_OFFSET_X = 12; // Limit horizontal eye movement
const MAX_EYE_OFFSET_Y = 8;  // Limit vertical eye movement
const MAX_HEAD_OFFSET = 10;  // Head movement range

// Utility function to clamp values within a given range
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

const Avatar = () => {
  const [eyePosition, setEyePosition] = useState({ leftX: 0, leftY: 0, rightX: 0, rightY: 0 });
  const [headPosition, setHeadPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(({ clientX, clientY }) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (clientX - centerX) / centerX;
    const offsetY = (clientY - centerY) / centerY;

    // Clamp values so eyes never move outside the sclera
    const eyeOffsetX = clamp(offsetX * MAX_EYE_OFFSET_X, -MAX_EYE_OFFSET_X, MAX_EYE_OFFSET_X);
    const eyeOffsetY = clamp(offsetY * MAX_EYE_OFFSET_Y, -MAX_EYE_OFFSET_Y, MAX_EYE_OFFSET_Y);

    setEyePosition({
      leftX: eyeOffsetX,
      leftY: eyeOffsetY,
      rightX: eyeOffsetX,
      rightY: eyeOffsetY,
    });

    setHeadPosition({
      x: clamp(offsetX * MAX_HEAD_OFFSET, -MAX_HEAD_OFFSET, MAX_HEAD_OFFSET),
      y: clamp(offsetY * MAX_HEAD_OFFSET, -MAX_HEAD_OFFSET, MAX_HEAD_OFFSET),
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.svg
      className="avatar-container"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid meet"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 6, mass: 1, velocity: -9 }}
    >
      {/* Hair (Moves with head) */}
      <motion.image
        href={hairImg}
        x={180 + headPosition.x}
        y={100 + headPosition.y}
        width="840"
        height="840"
      />

      {/* Neck (Fixed in place, between hair and head) */}
      <image href={neckImg} x="240" y="180" width="700" height="700" />

      {/* Grouping head-related elements to move together */}
      <motion.g transform={`translate(${headPosition.x}, ${headPosition.y})`}>
        {/* Head */}
        <image href={headImg} x="180" y="100" width="840" height="840" />

        {/* Sclera (White part of eyes, positioned inside the head) */}
        <image href={scleraL} x="175" y="92" width="850" height="850" />
        <image href={scleraR} x="180" y="92" width="850" height="850" />

        {/* Eyes (Now constrained within sclera bounds) */}
        <motion.image
          href={eyeLImg}
          x={247 + eyePosition.leftX}
          y={156 + eyePosition.leftY}
          width="650"
          height="650"
          transition={{ type: "spring", stiffness: 15 }}
        />
        <motion.image
          href={eyeRImg}
          x={288.5 + eyePosition.rightX}
          y={164.5 + eyePosition.rightY}
          width="650"
          height="650"
          transition={{ type: "spring", stiffness: 15 }}
        />

        {/* Eyebrows (On top of eyes) */}
        <image href={eyebrowsImg} x="107" y="92.5" width="990" height="855" />
      </motion.g>
    </motion.svg>
  );
};

export default Avatar;
