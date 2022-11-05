const EachEndorsement = (props) => {
    return(
        <div className={"w-1/3 border-4 border-gray-500 rounded-xl text-black text-[18px] py-4 px-6 mx-8 mt-6 shadow-xl shadow-gray-500 font-bold"}>
            <p>{props.message}</p>
            <hr className={"my-4"}></hr>
            <p>{props.author}</p>
        </div>
    )
}

export default EachEndorsement