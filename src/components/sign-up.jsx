import { useEffect, useRef, useState } from 'react'
import './style/signup.css'
import { gsap } from 'gsap'
import Arrow from "../images/arrow.png"
import SignLoginForm from './sign-login-form'

const Signup = () => {
    const signUpMain = useRef(null)
    const navigator = useRef(null)
    const [navOpen, setNavOpen] = useState(true)
    const navOriginalPosition = useRef({ x: 0 })
   

    useEffect(() => {
        const element = signUpMain.current
        const nav = document.querySelector('nav')
        nav.style.zIndex='100' 
        gsap.fromTo(
            element,
            { opacity: 0, y: -1000 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,

                ease: "power2.out",
            }
        )
        gsap.to(nav, {
            x: -1200,
            duration: 1,
            ease: "power2.out",
        })

        return () => {
            gsap.to(nav, {
                x: 0,
                duration: 1,
                ease: "power2.out",
            })
        }
    }, [])
    useEffect(() => {


        const navigatorElement = navigator.current
        const nav = document.querySelector('nav')
    
        const toggleNavbar = (event) => {
            const signupMain = document.querySelector('.sign-login-form');
            if (navOpen) {
                gsap.to(nav, {
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out",
                })
                gsap.to(signupMain,{
                    y: 800,
                    duration: 0.5,
                    ease: "power2.out",
                })
                gsap.to(navigatorElement, {
                    rotate: 180,
                    duration: 0.5,
                    ease: "power2.out",
                })
            } else {
                gsap.to(navigatorElement, {
                    rotate: 0,
                    duration: 0.5,
                    ease: "power2.out",
                })
                gsap.to(signupMain,{
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                })
                gsap.to(nav, {
                    x: -1200,
                    duration: 0.5,
                    ease: "power2.out",
                })
            }
            setNavOpen(!navOpen)
        }

        navigatorElement.addEventListener('click', toggleNavbar)

        return () => {

        }
    }, [navOpen])

    return (
        <div className='Signup'>
            <div ref={signUpMain} className='sign-up-main'>
                    <SignLoginForm/>
            </div>
            <div ref={navigator} className='navigator'>
                <img src={Arrow} alt="arrow-img" />
            </div>
        </div>
    )
}

export default Signup
