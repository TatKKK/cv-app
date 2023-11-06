import "./scrollUp.scss";

import React, { useState, useEffect } from 'react';

const ScrollUpButton = ({icon}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button className="scroll-up-button" onClick={scrollToTop}>
        {icon}
      </button>
    )
  );
};

export default ScrollUpButton;
