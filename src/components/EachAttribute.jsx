import {v4 as uuidv4} from "uuid";
import {useState} from "react";

const EachAttribute = (props) => {
    const { attributeName, handelCheckAttribute, handelChangeValue } = props;
    const [timeFrom, setTimeFrom] = useState(0.0);
    const [timeTo, setTimeTo] = useState(0.0);

    const [autoFocusFrom, setAutoFocusFrom] = useState(false);
    const [autoFocusTo, setAutoFocusTo] = useState(false);


    const handelChangeTimeFrom = (event) => {
        setAutoFocusFrom(true);
        setAutoFocusTo(false);
        setTimeFrom(event.target.value);
        handelChangeValue(attributeName, "timeFrom", event.target.value);
    }

    const handelCheckBox = () => {
        handelCheckAttribute(attributeName);
        setTimeFrom(0);
        setTimeTo(0);
        setAutoFocusTo(false);
        setAutoFocusFrom(false);
    }

    const handelChangeTimeTo = (event) => {
        setAutoFocusFrom(false);
        setAutoFocusTo(true);
        setTimeTo(event.target.value);
        handelChangeValue(attributeName, "timeTo", event.target.value);
    }

    return(
        <li className={"flex justify-between"} key={uuidv4()}>
            <div className={"flex"}>
                {autoFocusFrom || autoFocusTo ? <input type={"checkbox"} className={"mr-2"} onChange={handelCheckBox} checked></input> : <input type={"checkbox"} className={"mr-2"} onChange={() => handelCheckAttribute(attributeName)}></input>}

                <p>{attributeName}</p>
            </div>
            <div>
                <label className={"mr-2"}>time from</label>
                {autoFocusFrom ? <input className={"text-center"} value={timeFrom} onChange={handelChangeTimeFrom} autoFocus></input> : <input className={"text-center"} value={timeFrom} onChange={handelChangeTimeFrom}></input>}
                <label className={"mx-2"}>time to</label>
                {autoFocusTo ? <input className={"text-center"} value={timeTo} onChange={handelChangeTimeTo} autoFocus></input> : <input className={"text-center"} value={timeTo} onChange={handelChangeTimeTo}></input>}
            </div>
        </li>
    )
}

export default EachAttribute;