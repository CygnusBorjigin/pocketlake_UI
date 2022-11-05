import NavBar from "./NavBar";
import NavColumn from "./NavColumn";
import CreateProject from "./CreateProject";

const DashBoard = () => {
    return(
        <div>
            <NavBar></NavBar>
            <div className={"flex"}>
                <NavColumn></NavColumn>
                <CreateProject></CreateProject>
            </div>
        </div>
    )
}

export default DashBoard;