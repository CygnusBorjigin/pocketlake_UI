import AttributeSelector from "./AttributeSelector";
import ReactJson from 'react-json-view';
import {useState} from "react";
import axios from "axios";
import NavBar from "../../landingpage/landingPageLg/NavBar";

const GuiSample = () => {
    const [query, setQuery] = useState({});
    const [displayRes, setDisplayRes] = useState(false);
    const [resData, setResData] = useState({});

    const handelGetData = async () => {
        const data = JSON.stringify(query);
        const config = {
            method: 'post',
            url: "http://54.196.39.68",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        try{
            const res = await axios(config);
            setResData(res.data);
            setDisplayRes(true);
        } catch (e) {
            console.log(e);
        }
    }


    return(
        <div>
            <div className={"h-screen w-screen bg-gray-100"}>
                <h1 className={"text-center pt-4 font-cinzel text-3xl mb-4"}>ThrorMap Graphical User Interface Demo</h1>
                <div className={"border-t-3 bottom-black w-screen flex"}>
                    <AttributeSelector updateQuery={setQuery} currentQuery={query}/>
                    <div className={"w-1/3 px-4"}>
                        <button className={"w-full border-2 border-gray-600 rounded-md mb-4 hover:bg-gray-600 hover:text-amber-50"} onClick={handelGetData}>Get Data</button>
                        <ReactJson src={query} />
                    </div>
                </div>
                {displayRes ? <ReactJson src={resData} />: null}
            </div>
        </div>
    )
}

export default GuiSample;