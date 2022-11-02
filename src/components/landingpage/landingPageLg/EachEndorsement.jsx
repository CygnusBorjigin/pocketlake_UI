const EachEndorsement = (props) => {
    return(
        <div className={"w-1/3 border-2 border-green-500 rounded-xl text-white text-[18px] py-4 px-6 mx-8 mt-6 shadow-xl shadow-green-500"}>
            <p>{props.message}</p>
            <hr className={"my-4"}></hr>
            <p>{props.author}</p>
        </div>
    )
}

export default EachEndorsement