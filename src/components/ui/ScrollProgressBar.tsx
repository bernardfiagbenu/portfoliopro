'use client';

import { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollHeight > clientHeight) {
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScroll(scrolled);
    } else {
      setScroll(0); // No scrollbar, so progress is 0
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-secondary h-1 sticky top-[calc(4rem+1px)] z-50">
      <div
        className="bg-accent h-1"
        style={{ width: `${scroll}%`, transition: 'width 0.1s linear' }}
      />
    </div>
  );
};

export default ScrollProgressBar;
