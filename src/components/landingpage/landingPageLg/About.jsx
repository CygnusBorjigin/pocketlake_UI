import buSeal from '../../images/Boston_University_seal.svg.png';
import landingpage2 from "../../images/landingpage2.svg";
import EachEndorsement from "./EachEndorsement";

const About = () => {
    const emphStyle = "text-white bg-gray-600 rounded-xl px-4 shadow-md";
    const endorsements = [{author: "Professor Cari Babitzke, History", message: "I think that, particularly in my role as an educator, an aggregating website where a query will call up information from multiple government sources would be very helpful. Please let me know how the project progresses!"}, {author: "Professor Richard Elia, Archaeology", message: "I am confident that there would be a robust demand for your search engine because it would allow researchers to do what is virtually impossible now."}];
    return(
        <div className={"text-black h-[100vh] pt-40 "} id={"about"}>
            <div className={"flex"}>
                <img src={landingpage2} className={"w-1/6 mx-2"}></img>
                <div className={"flex flex-col text-3xl font-raleway justify-center"}>
                    <div className={"border-4 rounded-lg border-gray-600 shadow-xl shadow-gray-600 p-4 mx-4"}>
                        <p className={"mb-8"}><span className={emphStyle}>One</span> access point, <span className={emphStyle}>fourteen</span> departments, over <span className={emphStyle}>six thousand</span> agencies, <span className={emphStyle}>millions</span> of databases at <br />your fingertips. </p>
                        <p className={"mb-8"}>Provided through a GraphQL inspired entrypoint to a custom conceptual <span className={emphStyle}>data lake</span> containing this  <br /> industry-changing data</p>
                        <p>Received official endorsement and support from <span className={emphStyle}>Boston University</span> through BU BuildLab</p>
                        <img src={buSeal} className={"w-[200px] mt-4 mx-auto"}></img>
                    </div>
                    <div className={"flex justify-center"}>
                        {endorsements.map(each => <EachEndorsement author={each.author} message={each.message} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
