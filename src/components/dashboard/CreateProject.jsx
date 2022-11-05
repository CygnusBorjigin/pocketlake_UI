import add from "../images/add.svg";

const CreateProject = () => {
    return(
        <div className={"w-[200px] h-[200px] border-2 border-gray-500 rounded-lg shadow-lg shadow-gray-500 m-8 cursor-pointer"}>
            <img src={add} className={"h1/2 w-1/2 m-auto mt-12"}></img>
        </div>
    )
}

export default CreateProject;