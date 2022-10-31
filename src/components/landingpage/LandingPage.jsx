import {useEffect, useState} from "react";
import LandingPageLg from "./landingPageLg/LandingPageLg";
import LandingPageMd from "./landingPageMd/LandingPageMd";

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
            {windowDimension.winWidth > 1460 ? <LandingPageLg></LandingPageLg> : <LandingPageMd />}
        </div>
    )
}

export default LandingPage;