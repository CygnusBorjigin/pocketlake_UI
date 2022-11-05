import landingPage1 from "../../images/landingpage1.svg";
const Home = () => {
    const emphStyle = "text-white bg-gray-600 rounded-xl px-4 shadow-md";
    return(
        <div className={"text-black h-[100vh] flex"} id={"home"}>
            <div className={"flex flex-col justify-center"}>
                <div className={"ml-8 font-raleway text-[60px]"}>
                    <h1>We provide unlimited access to <span className={emphStyle}>all</span> public sector data</h1>
                    <h1>through <span className={emphStyle}>one standardized</span> access point.</h1>
                </div>
                <div className={"ml-16 mt-40 font-raleway w-2/3 text-[30px]"}>
                    <h1>Precise, standardized, and formatted data delivered instantaneously.</h1>
                    <h1>Support your project and research with the full data power of the</h1>
                    <span className={emphStyle}>U.S. federal government</span>
                    <div className={"w-full flex justify-center mt-16"}>
                        <button className={"border-2 border-gray-400 rounded-2xl shadow-lg shadow-gray-500 px-6 py-2 text-[20px] font-bold text-gray-500 font-lora hover:bg-gray-500 hover:text-white"}>Get Started</button>
                    </div>
                </div>
            </div>
            <img src={landingPage1} className={"w-1/4 h-[500px] right-4 top-[300px] absolute"}></img>
        </div>
    )
}

export default Home;