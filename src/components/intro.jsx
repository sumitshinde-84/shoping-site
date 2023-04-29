import "./style/intro.css"
import sneakerHome from "../images/home-sneaker.png"
import { useEffect } from "react"
import gsap from "gsap-trial"
import { useRef } from "react"

const Intro = () => {
    const sneakerHomeRef = useRef(null)
    const tl = gsap.timeline()
    useEffect(() => {
        tl.to(sneakerHomeRef.current, {
            x: -1000,
            y: -20,
            rotate: -10,
            delay: 14,
            duration: .9,

        })
    })
     
    return (
        <div className="intro">
            <h1 text="RONEX">RONEX</h1>
            <img ref={sneakerHomeRef} className="sneaker-home" src={sneakerHome} alt="sneaker" />
        </div>
    )
}

export default Intro;