import landingTwo from '../../images/landingpage2.png';
import buSeal from '../../images/Boston_University_seal.svg.png';
import EachEndorsement from "./EachEndorsement";

const About = () => {
    const emphStyle = "text-green-500";
    const endorsements = [{author: "Professor Cari Babitzke, History", message: "I think that, particularly in my role as an educator, an aggregating website where a query will call up information from multiple government sources would be very helpful. Please let me know how the project progresses!"}, {author: "Professor Richard Elia, Archaeology", message: "I am confident that there would be a robust demand for your search engine because it would allow researchers to do what is virtually impossible now."}];
    return(
        <div className={"text-amber-50 h-screen"} id={"about"}>
            <div className={"flex"}>
                <img src={landingTwo} className={"w-1/3 h-1/2 mt-36"}></img>
                <div className={"flex flex-col text-3xl font-raleway justify-center mt-40"}>
                    <p className={"mb-8"}><span className={emphStyle}>One</span> access point, <span className={emphStyle}>fourteen</span> departments, over <span className={emphStyle}>six thousand</span> agencies, <span className={emphStyle}>millions</span> of databases at your fingertips. </p>
                    <p className={"mb-8"}>Provided through a GraphQL inspired entrypoint to a custom conceptual <span className={emphStyle}>data lake</span> containing this industry-changing data</p>
                    <p>Received official endorsement and support from <span className={emphStyle}>Boston University</span> through BU BuildLab</p>
                    <img src={buSeal} className={"w-[200px] mt-8 mx-auto"}></img>
                    <div className={"flex justify-center"}>
                        {endorsements.map(each => <EachEndorsement author={each.author} message={each.message} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
