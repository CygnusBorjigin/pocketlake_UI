import {useEffect, useState} from "react";
import LandingPageLg from "./landingPageLg/LandingPageLg";

const LandingPage = () => {
    // get screen size
    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    });

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])

    return(
        <div>
            <LandingPageLg></LandingPageLg>
        </div>
    )
}

export default LandingPage;