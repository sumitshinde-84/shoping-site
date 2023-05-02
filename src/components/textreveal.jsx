import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./style/textreveal.css";

const TextReveal = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textChars = textRef.current.innerText.split("");
    textRef.current.innerText = "";

    textChars.forEach((char) => {
      const charElement = document.createElement("span");
      if (char === " ") {
        // Add non-breaking space for regular spaces
        charElement.innerHTML = "&nbsp;";
      } else {
        charElement.innerText = char;
      }
      charElement.style.opacity = 0;
      charElement.style.display = "inline-block";
      charElement.style.transition = "opacity 0.3s";

      textRef.current.appendChild(charElement);
    });

    gsap.to(textRef.current.children, {
      opacity: 1,
      stagger: 0.05,
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        end: "center center",

        scrub: true,
      },
    });
  }, []);

  return (
    <div className="text-reveal">
      <p ref={textRef}>
        We create unique and one-of-a-kind pieces that stand out from the crowd.
        Our fashion and lifestyle products are carefully crafted with the
        highest attention to detail to ensure that each item is not just a
        product, but a work of art. Join us in our journey to redefine fashion
        and make a statement.
      </p>
    </div>
  );
};

export default TextReveal;
