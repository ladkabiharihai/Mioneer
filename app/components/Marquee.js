"use client"
import React, { useState, useRef, useEffect } from 'react';

function ScrollableContainer({ children }) {
  const containerRef = useRef(null);
  const [currPos, setCurrPos] = useState(0);
  const [prevX, setPrevX] = useState(0);
  const [firing, setFiring] = useState(false);

  const handleMouseMove = (event) => {
    if (!firing) return;

    const newX = event.clientX;
    const newPos = currPos - (newX - prevX);
    const availableOffset = containerRef.current.scrollWidth - containerRef.current.clientWidth;

    const adjustedPos = Math.min(Math.max(newPos, 0), availableOffset); // Ensure newPos stays within bounds

    setPrevX(newX);
    containerRef.current.scrollTo({ left: adjustedPos, behavior: 'smooth' }); // Use smooth scrolling
    setCurrPos(adjustedPos);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);

    return () => container.removeEventListener('mousemove', handleMouseMove); // Cleanup on unmount
  }, [containerRef]); // Only re-attach listener when containerRef changes

  return (
    <div ref={containerRef} className="container">
   <h1> hello   </h1>
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: scroll; /* Enable horizontal scrolling */
        }
      `}</style>
    </div>
  );
}

export default ScrollableContainer;
