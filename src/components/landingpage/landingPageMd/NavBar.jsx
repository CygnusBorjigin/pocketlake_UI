import {Link as ScrollLink} from 'react-scroll';
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const buttonStyle = "m-4 border-b-2 border-b-black hover:border-b-white px-3 font-cinzel text-lg";

    const navigate = useNavigate();

    const handleTryOut = () => {
        navigate("/demo");
    };

    return(
        <div className={"text-amber-50 h-20 flex flex-col justify-center fixed bg-black"}>
            <div className={"w-screen flex justify-between"}>
                <div className={"text-4xl font-cinzel ml-6 flex flex-col"}>
                    <div>
                        <span>Thror</span><span className={"text-green-400"}>Map</span>
                    </div>
                    <span className={"text-sm ml-16"}>Just Ask</span>
                </div>
                <div>
                    <button className={buttonStyle}>
                        <ScrollLink to="home" spy={true} smooth={true} offset={50} duration={500}>Home</ScrollLink>
                    </button>
                    <button className={buttonStyle}>
                        <ScrollLink to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</ScrollLink>
                    </button>
                    <button className={buttonStyle}>
                        <ScrollLink to="docs" spy={true} smooth={true} offset={50} duration={500}>Docs</ScrollLink>
                    </button>
                    <button className={buttonStyle}>
                        <ScrollLink to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</ScrollLink>
                    </button>
                    <button className={buttonStyle}>Login</button>
                    <button className={buttonStyle} onClick={handleTryOut}>Try It out</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;