import React, { useRef, useEffect } from "react";
import anime from "animejs";

const MyComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    anime({
      targets: elementRef.current,
      opacity: 0.5,
      translateX: "50%",
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, []);

  return <div ref={elementRef}>Hello, Anime.js!</div>;
};

export default MyComponent;
/*
npm install animejs


import anime from 'animejs';


*/
