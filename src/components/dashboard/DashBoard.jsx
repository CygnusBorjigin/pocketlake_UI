import NavBar from "./NavBar";
import NavColumn from "./NavColumn";
import CreateProject from "./CreateProject";
import Message from "./Message";

const DashBoard = () => {
    const userToken = localStorage.getItem("throrMapUserToken");
    return(
        <div>
            <NavBar></NavBar>
            <div className={"flex"}>
                <NavColumn loggedIn={userToken == null ? false : true}></NavColumn>
                <div className={"flex flex-col w-full"}>
                    {userToken == null ? <Message /> : null}
                    <CreateProject></CreateProject>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;