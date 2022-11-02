import landingOne from '../../images/landingpage1.png';

const Home = () => {

    return(
        <div className={"text-amber-50 h-screen"} id={"home"}>
            <div className={"h-screen flex flex-col justify-center"}>
                <div className={"ml-8 font-raleway text-[60px]"}>
                    <h1>We provide unlimited access to <span className={"text-green-400"}>all</span> public sector data</h1>
                    <h1>through <span className={"text-green-400"}>one standardized</span> access point.</h1>
                </div>
                <div className={"ml-16 mt-40 font-raleway w-2/3"}>
                    <h1 className={"text-[30px]"}>Precise, standardized, and formatted data delivered instantaneously.</h1>
                    <h1 className={"text-[30px]"}>Support your project and research with the full data power of the <span className={"text-green-400"}>U.S. federal government</span>.</h1>
                    <div className={"w-full flex justify-center mt-16"}>
                        <button className={"border-2 border-green-500 rounded-2xl shadow-lg shadow-green-500 px-6 py-2 text-[20px] font-bold text-green-500 bg-black font-lora hover:bg-green-500 hover:text-black"}>Get Started</button>
                    </div>
                </div>
            </div>
            <img src={landingOne} className={"w-1/4 h-[500px] right-4 top-[300px] absolute"}></img>
        </div>
    )
}

export default Home;