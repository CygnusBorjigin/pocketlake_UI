import NavBar from "./NavBar";
import NavColumn from "./NavColumn";
import Message from "./Message";
import {useEffect, useState} from "react";
import ProjectDisplay from "./projectDisplay/ProjectDisplay";
import QueryBuilder from "./queryBuilder/QueryBuilder";

const DashBoard = () => {
    const userToken = localStorage.getItem("throrMapUserToken");
    const [currentDisplay, setCurrentDisplay] = useState("projects");
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return(
        <div>
            <NavBar></NavBar>
            <div className={"flex"}>
                <NavColumn loggedIn={userToken === null ? false : true} changeDisplay={setCurrentDisplay}></NavColumn>
                <div className={"flex flex-col w-full"}>
                    {userToken === null ? <Message /> : null}
                    {currentDisplay === "projects" ? <ProjectDisplay></ProjectDisplay> : null}
                    {currentDisplay === "queryBuilder" ? <QueryBuilder /> : null}
                </div>
            </div>
        </div>
    )
}

export default DashBoard;