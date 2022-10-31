import {useEffect, useState} from "react";
import LandingPageLg from "./landingPageLg/LandingPageLg";
import LandingPageMd from "./landingPageMd/LandingPageMd";
import LandingPageSm from "./landingPageSm/LandingPageSm";

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
            {windowDimension.winWidth > 1460 ? <LandingPageLg></LandingPageLg> : (windowDimension.winWidth > 790 ? <LandingPageMd /> : <LandingPageSm />)}
        </div>
    )
}

export default LandingPage;