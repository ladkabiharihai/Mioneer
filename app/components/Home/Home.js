// components/MouseFollower.js
"use client"
// components/MouseFollower.js

import { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update position with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((currentPosition) => {
        const x = lerp(currentPosition.x, targetPosition.x, 0.1);
        const y = lerp(currentPosition.y, targetPosition.y, 0.1);
        return { x, y };
      });
    }, );

    return () => {
      clearInterval(interval);
    };
  }, [targetPosition]);

  // Linear interpolation function (lerp)
  const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
  };

  return (
    <div style={{ position: 'absolute', left: position.x, top: position.y }}>
      <div
        className='mouse-follower'
      />
    </div>
  );
};

export default MouseFollower;

