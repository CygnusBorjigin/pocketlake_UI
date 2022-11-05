import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import DocsDisplay from "./DocsDisplay";
import Contact from "./Contact";
import {useEffect, useState} from "react";

const LandingPageLg = () => {

    return(
        <div className={"w-screen bg-gray-100"}>
            <NavBar></NavBar>
            <Home></Home>
            <About></About>
            <DocsDisplay></DocsDisplay>
            <Contact></Contact>
        </div>
    )
}

export default LandingPageLg;