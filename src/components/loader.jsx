import { useEffect, useRef } from "react";
import "./style/loader.css";
import gsap from "gsap";
import { useState } from "react";

const Loader = ({ getPageLoadStatus }) => {
  const lowest = useRef(null);
  const secondLowest = useRef(null);
  const secondTop = useRef(null);
  const Top = useRef(null);
  const tl = gsap.timeline();
  const main = useRef(null);
  useEffect(() => {
    tl.to(lowest.current, {
      opacity: 1,
      y: 20,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        tl.to(lowest.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            tl.to(secondLowest.current, {
              opacity: 1,
              y: 20,
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                tl.to(secondLowest.current, {
                  opacity: 0,
                  y: 40,
                  duration: 1,
                  ease: "power2.inOut",
                  onComplete: () => {
                    tl.to(secondTop.current, {
                      opacity: 1,
                      y: 20,
                      duration: 1,
                      ease: "power2.out",
                      onComplete: () => {
                        tl.to(secondTop.current, {
                          opacity: 0,
                          y: 40,
                          duration: 1,
                          ease: "power2.inOut",
                          onComplete: () => {
                            tl.to(Top.current, {
                              opacity: 1,
                              y: 20,
                              duration: 1,
                              ease: "power2.out",
                              onComplete: () => {
                                tl.to(main.current, {
                                  x: "100vw",
                                  duration: 1,
                                  ease: "Expo.easeOut",
                                  onComplete: () => {
                                    getPageLoadStatus(true);
                                    document.querySelector('nav').style.zIndex='100'
                                  },
                                });
                              },
                            });
                          },
                        });
                      },
                    });
                  },
                });
              },
            });
          },
        });
      },
    });

    
  }, []);

  return (
    <div ref={main} className="loader">
      <h1 className="name">Sumit.Shinde</h1>
      <h3>The Creative Mind</h3>
      <div className="loads">
        <h1 ref={lowest} id="lowest">
          00
        </h1>
        <h1 ref={secondLowest} id="second-lowest">
          36
        </h1>
        <h1 ref={secondTop} id="second-top">
          72
        </h1>
        <h1 ref={Top} id="top">
          100
        </h1>
      </div>
    </div>
  );
};

export default Loader;
