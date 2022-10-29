import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import DocsDisplay from "./DocsDisplay";

const LandingPage = () => {

    return(
        <div className={"w-screen bg-black"}>
            <NavBar></NavBar>
            <Home></Home>
            <About></About>
            <DocsDisplay></DocsDisplay>
        </div>
    )
}

export default LandingPage;