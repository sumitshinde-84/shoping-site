import React, { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

import "./style/intro.css";
import sneakerHome from "../images/home-sneaker.png";

const Intro = () => {
  const sneakerHomeRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(sneakerHomeRef.current, {
      x: -1100,
      y: -20,
      rotate: -10,
      delay: 14,
      duration: 0.9,
    });
  }, []);

  useEffect(() => {
    gsap.to(sneakerHomeRef.current, {
        xPercent: -250,
        ease: "none",
        scrollTrigger: {
          trigger: sneakerHomeRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      })
      
  }, []);

  return (
    <div className="intro">
      <h1 text="RONEX">RONEX</h1>
      <img
        ref={sneakerHomeRef}
        className="sneaker-home"
        src={sneakerHome}
        alt="sneaker"
      />
    </div>
  );
};

export default Intro;