const EachDoc = (props) => {
    return(
        <div className={"w-1/5 h-1/2 border-2 border-gray-500 mx-4 rounded-2xl text-black shadow-xl shadow-gray-500"}>
            <h1 className={"text-center py-4 font-lora border-b-2 border-b-gray-500"}>{props.info.title}</h1>
            <p className={"font-raleway mx-4 mt-4 font-bold"}>{props.info.summary}</p>
        </div>
    )
}

export default EachDoc;