import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

const LandingPage = () => {

    return(
        <div className={"w-screen bg-black"}>
            <NavBar></NavBar>
            <Home></Home>
            <About></About>
        </div>
    )
}

export default LandingPage;