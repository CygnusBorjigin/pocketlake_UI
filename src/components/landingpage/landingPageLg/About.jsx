import landingTwo from '../../images/landingpage2.png';
import buSeal from '../../images/Boston_University_seal.svg.png';

const About = () => {
    const emphStyle = "text-green-500";
    return(
        <div className={"text-amber-50 h-screen"} id={"about"}>
            <div className={"flex"}>
                <img src={landingTwo} className={"w-1/3 h-1/2 mt-36"}></img>
                <div className={"flex flex-col text-3xl font-raleway justify-center"}>
                    <p className={"mb-8"}><span className={emphStyle}>One</span> access point, <span className={emphStyle}>fourteen</span> departments, over <span className={emphStyle}>six thousand</span> agencies, <span className={emphStyle}>millions</span> of databases at your fingertips. </p>
                    <p className={"mb-8"}>Provided through a GraphQL inspired entrypoint to a custom conceptual <span className={emphStyle}>data lake</span> containing this industry-changing data</p>
                    <p>Received official endorsement and support from <span className={emphStyle}>Boston University</span> through BU BuildLab</p>
                    <img src={buSeal} className={"w-1/6 mt-8 mx-auto"}></img>
                </div>
            </div>
        </div>
    )
}

export default About;
