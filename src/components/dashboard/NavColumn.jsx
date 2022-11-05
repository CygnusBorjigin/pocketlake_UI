import {useState} from "react";

const NavColumn = (props) => {
    const [currentDisplay, setCurrentDisplay] = useState("projects");
    const unSelectedStyle = "mx-auto font-quicksand my-8 cursor-pointer h-16 flex flex-col justify-center";
    const selectedStyle = "mx-auto font-quicksand my-8 bg-gray-100 w-full cursor-pointer h-16 flex flex-col justify-center";

    const handelClick = (event) => {
        setCurrentDisplay(event.target.id);
        props.changeDisplay(event.target.id);
    }
    return(
        <ul className={"h-screen left-0 w-40 bg-gray-300 flex flex-col justify-center"}>
            <li className={currentDisplay == "projects" ? selectedStyle : unSelectedStyle} id={"projects"} onClick={handelClick}>
                <h1 className={"text-center text-xl"}  id={"projects"} onClick={handelClick}>Projects</h1>
            </li>
            <li className={currentDisplay == "queryBuilder" ? selectedStyle : unSelectedStyle} id={"queryBuilder"} onClick={handelClick}>
                <h1 className={"text-center text-xl"} id={"queryBuilder"} onClick={handelClick}>Query Builder</h1>
            </li>
            <li className={currentDisplay == "accountInfo" ? selectedStyle : unSelectedStyle} id={"accountInfo"} onClick={handelClick}>
                <h1 className={"text-center text-xl"} id={"accountInfo"} onClick={handelClick}>Account Info</h1>
            </li>
            <li className={currentDisplay == "settings" ? selectedStyle : unSelectedStyle} id={"settings"} onClick={handelClick}>
                <h1 className={"text-center text-xl"} id={"settings"} onClick={handelClick}>Settings</h1>
            </li>
            {props.loggedIn ? null : <li className={unSelectedStyle}><h1 className={"text-center text-xl"}>Login / Sign Up</h1></li>}
        </ul>
    )
}

export default NavColumn;