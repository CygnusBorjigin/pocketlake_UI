import {Link as ScrollLink} from 'react-scroll';
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const buttonStyle = "m-4 px-3 py-1 font-raleway text-lg border-2 border-gray-300 rounded-lg shadow-lg hover:bg-gray-600 hover:text-white cursor-pointer";

    const navigate = useNavigate();

    const handleTryOut = () => {
        navigate("/dashboard");
    };

    return(
        <div className={"text-black h-20 flex flex-col justify-center fixed border-b-2 shadow-lg font-bold bg-gray-100"}>
            <div className={"w-screen flex justify-between"}>
                <div className={"text-4xl font-raleway ml-6 flex flex-col font-bold pt-2"}>
                    <div>
                        <span>Thror</span><span className={"text-green-600"}>Map</span>
                    </div>
                    <span className={"text-sm ml-16"}>Just Ask</span>
                </div>
                <div>
                    <ScrollLink to="home" spy={true} smooth={true} offset={50} duration={500} className={buttonStyle}>Home</ScrollLink>
                    <ScrollLink to="about" spy={true} smooth={true} offset={50} duration={500} className={buttonStyle}>About Us</ScrollLink>
                    <ScrollLink to="docs" spy={true} smooth={true} offset={50} duration={500} className={buttonStyle}>Docs</ScrollLink>
                    <ScrollLink to="contact" spy={true} smooth={true} offset={50} duration={500} className={buttonStyle}>Contact</ScrollLink>
                    <button className={buttonStyle}>Login</button>
                    <button className={buttonStyle} onClick={handleTryOut}>Try It out</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;