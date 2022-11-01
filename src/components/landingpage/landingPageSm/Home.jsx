import landingOne from '../../images/landingpage1.png';

const Home = () => {

    return(
        <div className={"text-amber-50 h-screen pt-80"} id={"home"}>
            <div className={"h-screen flex flex-col justify-center"}>
                <div className={"ml-8 font-raleway text-[30px]"}>
                    <p>We provide unlimited access to <span className={"text-green-400"}>all</span> public sector data through <span className={"text-green-400"}>one standardized</span> access point.</p>
                </div>
                <div className={"ml-16 mt-40 font-raleway w-2/3"}>
                    <p className={"text-[30px]"}>Precise, standardized, and formatted data delivered instantaneously.</p>
                    <p className={"text-[30px] mt-10"}>Support your project and research with the full data power of the <span className={"text-green-400"}>U.S. federal government</span>.</p>
                    <div className={"w-full flex justify-center mt-16"}>
                        <button className={"border-2 border-green-500 rounded-2xl px-6 py-2 text-[20px] font-bold text-green-500 bg-black font-lora hover:border-0 hover:bg-green-500 hover:text-black"}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;