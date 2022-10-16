import AttributeSelector from "./AttributeSelector";
import ReactJson from 'react-json-view';
import {useState} from "react";

const GuiSample = () => {
    const sample = {
        "message": "this is working"
    }

    const [query, setQuery] = useState({});

    return(
        <div className={"h-screen w-screen bg-gray-200"}>
            <h1 className={"text-center pt-4 font-cinzel text-3xl"}>ThrorMap Graphical User Interface Demo</h1>
            <div className={"border-t-3 bottom-black w-screen flex"}>
                <AttributeSelector updateQuery={setQuery}/>
                <div className={"w-1/2"}>
                    <ReactJson src={query} />
                </div>
            </div>
        </div>
    )
}

export default GuiSample;