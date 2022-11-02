const EachEndorsement = (props) => {
    return(
        <div className={"w-1/3 border-2 border-green-500 rounded-xl shadow-lg shadow-green-500 px-4 py-6 text-white text-[15px] mx-6 my-4 mx-8 mt-6 font-raleway"}>
            <p>{props.message}</p>
            <hr className={"my-4"}></hr>
            <p>{props.author}</p>
        </div>
    )
}

export default EachEndorsement