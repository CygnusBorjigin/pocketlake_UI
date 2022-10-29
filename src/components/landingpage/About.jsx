import landingTwo from '../images/landingpage2.png';

const About = () => {
    const emphStyle = "text-green-500";
    return(
        <div className={"mt-[200px] text-amber-50 h-screen"} id={"about"}>
            <div className={"flex"}>
                <img src={landingTwo} className={"w-1/3 h-1/2 h-[400px] mt-16"}></img>
                <div className={"flex flex-col text-3xl font-raleway mt-[370px]"}>
                    <p className={"mb-8"}><span className={emphStyle}>One</span> access point, <span className={emphStyle}>fourteen</span> departments, over <span className={emphStyle}>six thousand</span> agencies, <span className={emphStyle}>millions</span> of databases at your fingertip. </p>
                    <p>Provided through a GraphQL inspired entrypoint to a custom conceptual <span className={emphStyle}>data lake</span> containing this industry-changing data</p>
                </div>
            </div>
        </div>
    )
}

export default About;