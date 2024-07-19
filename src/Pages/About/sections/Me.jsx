import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Me = () => {
  const cursorRef = useRef({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const requestRef = useRef();

  const updateCursor = () => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0)`;
    }
    requestRef.current = requestAnimationFrame(updateCursor);
  };

  const mouseMove = (e) => {
    const size = cursorVariant === "text" ? 150 : 32;

    const offsetX = size / 2;
    const offsetY = size / 2;

    cursorRef.current.x = e.clientX - offsetX;
    cursorRef.current.y = e.clientY - offsetY;
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const handleMouseEnter = () => {
    setIsCursorVisible(true); // Show custom cursor
  };

  const handleMouseLeave = () => {
    setIsCursorVisible(false); // Hide custom cursor
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    requestRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isCursorVisible]);

  const cursorVariants = {
    default: {
      height: 40,
      width: 40,
      backgroundColor: "#000",
      mixBlendMode: "normal",
      transition: { type: "spring", stiffness: 700, damping: 30 },
    },
    text: {
      height: 150,
      width: 150,
      backgroundColor: "#FFF",
      mixBlendMode: "difference",
      transition: { type: "spring", stiffness: 700, damping: 30 },
    },
  };

  return (
    <div
      className="relative cursor-none h-screen w-[100%] flex  justify-center items-center bg-[#d6d6d6]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="bg-black flex justify-center items-center h-[100px] w-[20%] "
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        <h1 className="text-3xl text-white">Hello World</h1>
      </div>

      {isCursorVisible && (
        <motion.div
          className="rounded-full fixed top-0 left-0 height-32 w-32 pointer-events-none z-50 "
          ref={cursorRef}
          animate={cursorVariants[cursorVariant]}
        />
      )}
    </div>
  );
};

export default Me;
