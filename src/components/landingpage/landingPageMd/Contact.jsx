const Contact = () => {
    return (
        <div className={"w-screen h-screen bg-black text-white flex flex-col justify-center"} id={"contact"}>
            <h1 className={"font-cinzel text-center my-10"}>Please Leave A Message</h1>
            <form className={"border-2 w-1/2 mx-auto flex flex-col border-green-500 rounded-xl shadow-xl shadow-green-500"}>
                <label className={"mx-auto my-2"}>Your Email (For us to reply to)</label>
                <input
                    className={"mx-auto w-2/3 my-2 bg-black border-2 border-green-500 rounded-xl text-center"}
                    placeholder={"your email"}
                >
                </input>
                <label className={"mx-auto my-2"}>
                    Your Message
                </label>
                <textarea className={"my-2 w-2/3 mx-auto bg-black border-2 border-green-500 h-[200px]"}>

                </textarea>
                <button className={"border-2 border-green-500 w-1/5 mx-auto my-4 rounded-xl hover:bg-green-500 hover:text-black"}>Send</button>
            </form>
        </div>
    )
}

export default Contact;