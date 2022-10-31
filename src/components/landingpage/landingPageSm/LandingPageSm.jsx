import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import DocsDisplay from "./DocsDisplay";
import Contact from "./Contact";
import {useEffect, useState} from "react";

const LandingPageSm = () => {

    return(
        <div className={"w-screen bg-black"}>
            <NavBar></NavBar>
            <Home></Home>
            <About></About>
            <DocsDisplay></DocsDisplay>
            <Contact></Contact>
        </div>
    )
}

export default LandingPageSm;