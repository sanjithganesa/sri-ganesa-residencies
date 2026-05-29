import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Hide cursor when leaving browser window
    const handleMouseOut = (e) => {

      if (
        e.relatedTarget === null &&
        e.toElement === null
      ) {
        setIsVisible(false);
      }
    };

    // Show cursor again
    const handleMouseOver = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);

    document.addEventListener(
      "mouseout",
      handleMouseOut
    );

    document.addEventListener(
      "mouseover",
      handleMouseOver
    );

    const hoverElements = document.querySelectorAll(
      "button, a, .cursor-hover"
    );

    hoverElements.forEach((el) => {
      el.addEventListener(
        "mouseenter",
        handleMouseEnter
      );

      el.addEventListener(
        "mouseleave",
        handleMouseLeave
      );
    });

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      document.removeEventListener(
        "mouseout",
        handleMouseOut
      );

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      hoverElements.forEach((el) => {
        el.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );

        el.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      });
    };

  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block w-10 h-10 rounded-full border border-yellow-400"
      />

      {/* Inner Dot */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block w-2 h-2 rounded-full bg-yellow-400"
      />
    </>
  );
}

export default CustomCursor;