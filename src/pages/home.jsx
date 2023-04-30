import React, { useEffect, useRef, useState } from "react";
import "./style/Home.css";
import Loader from "../components/loader";
import ImgGridOpp from "../components/imgGridOpp";
import Intro from "../components/intro";
import Textreveal from "../components/textreveal";
import ImgGrid from "../components/imgGrid";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
    const [pageLoadStatus, setPageLoadStatus] = useState(false);
    const main = useRef(null);

    const getPageLoadStatus = (status) => {
        setPageLoadStatus(status);
    };

    const handleSmoothScroll = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: 0 },
            ease: "power2.out",
        });
    };

    useEffect(() => {
        const bodyElement = document.querySelector("body");
        bodyElement.addEventListener("scroll", handleSmoothScroll);

        return () => {
            bodyElement.removeEventListener("scroll", handleSmoothScroll);
        };
    }, []);

    return (
        <div ref={main} className="main-container">

            <Intro status={pageLoadStatus} />
            <Loader getPageLoadStatus={getPageLoadStatus} />
            <Textreveal />
            <ImgGrid />
            <ImgGridOpp/>
        </div>
    );
};

export default Home;
