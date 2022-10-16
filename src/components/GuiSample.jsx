import AttributeSelector from "./AttributeSelector";
import ReactJson from 'react-json-view';
import {useState} from "react";

const GuiSample = () => {
    const [query, setQuery] = useState({});

    const handelGetData = async () => {

    }

    return(
        <div className={"h-screen w-screen bg-gray-200"}>
            <h1 className={"text-center pt-4 font-cinzel text-3xl"}>ThrorMap Graphical User Interface Demo</h1>
            <div className={"border-t-3 bottom-black w-screen flex"}>
                <AttributeSelector updateQuery={setQuery}/>
                <div className={"w-1/2 px-4"}>
                    <button className={"w-full border-2 border-gray-600 rounded-md mb-4 hover:bg-gray-600 hover:text-amber-50"} onClick={handelGetData}>Get Data</button>
                    <ReactJson src={query} />
                </div>
            </div>
        </div>
    )
}

export default GuiSample;