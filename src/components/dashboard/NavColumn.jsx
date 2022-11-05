import {useState} from "react";

const NavColumn = (props) => {
    const [currentDisplay, setCurrentDisplay] = useState("projects");
    const unSelectedStyle = "mx-auto font-quicksand my-8 cursor-pointer";
    const selectedStyle = "mx-auto font-quicksand my-8 bg-gray-100 w-full text-center cursor-pointer";

    const handelClick = (event) => {
        setCurrentDisplay(event.target.id);
    }
    return(
        <ul className={"h-screen left-0 w-40 bg-gray-300 flex flex-col justify-center"}>
            <li className={currentDisplay == "projects" ? selectedStyle : unSelectedStyle} id={"projects"} onClick={handelClick}>Projects</li>
            <li className={currentDisplay == "queryBuilder" ? selectedStyle : unSelectedStyle} id={"queryBuilder"} onClick={handelClick}>Query Builder</li>
            <li className={currentDisplay == "accountInfo" ? selectedStyle : unSelectedStyle} id={"accountInfo"} onClick={handelClick}>Account Info</li>
            <li className={currentDisplay == "settings" ? selectedStyle : unSelectedStyle} id={"settings"} onClick={handelClick}>Settings</li>
            {props.loggedIn ? null : <li className={unSelectedStyle}>Login / Sign Up</li>}
        </ul>
    )
}

export default NavColumn;