import {Link as ScrollLink} from 'react-scroll';
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    return(
        <div className={"text-amber-50 h-20 flex flex-col justify-center fixed bg-black"}>
            <div className={"w-screen flex justify-between"}>
                <div className={"text-4xl font-cinzel ml-6 flex flex-col"}>
                    <div>
                        <span>Thror</span><span className={"text-green-400"}>Map</span>
                    </div>
                    <span className={"text-sm ml-16"}>Just Ask</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;