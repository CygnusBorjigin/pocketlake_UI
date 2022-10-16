import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const AttributeSelector = () => {
    const availableAttribute = ['temperature', 'dewpoint', 'maxTemperature', 'minTemperature', 'relativeHumidity', 'apparentTemperature', 'heatIndex', 'windChill', 'skyCover', 'windDirection', 'windSpeed', 'windGust', 'weather', 'hazards', 'probabilityOfPrecipitation', 'quantitativePrecipitation', 'iceAccumulation', 'snowfallAmount', 'snowLevel', 'ceilingHeight', 'visibility', 'transportWindSpeed', 'transportWindDirection', 'mixingHeight', 'hainesIndex', 'lightningActivityLevel', 'twentyFootWindSpeed', 'twentyFootWindDirection', 'waveHeight', 'wavePeriod', 'waveDirection', 'primarySwellHeight', 'primarySwellDirection', 'secondarySwellHeight', 'secondarySwellDirection', 'wavePeriod2', 'windWaveHeight', 'dispersionIndex', 'pressure', 'probabilityOfTropicalStormWinds', 'probabilityOfHurricaneWinds', 'potentialOf15mphWinds', 'potentialOf25mphWinds', 'potentialOf35mphWinds', 'potentialOf45mphWinds', 'potentialOf20mphWindGusts', 'potentialOf30mphWindGusts', 'potentialOf40mphWindGusts', 'potentialOf50mphWindGusts', 'potentialOf60mphWindGusts', 'grasslandFireDangerIndex', 'probabilityOfThunder', 'davisStabilityIndex', 'atmosphericDispersionIndex', 'lowVisibilityOccurrenceRiskIndex', 'stability', 'redFlagThreatIndex'];
    const [displayAttribute, setDisplayAttribute] = useState(false);
    const [query, setQuery] = useState({});

    const checkNationalWeatherService = () => {
        setDisplayAttribute(prev => !prev);
        setQuery(Object.keys(query).includes("nationalWeatherService") ? {} : {"nationalWeatherService": {}});
    };

    const handelCheckAttribute = (checkedAttribute) => {
        if(Object.keys(query.nationalWeatherService).includes(checkedAttribute)){
            const newQuery = query;
            delete newQuery.nationalWeatherService[checkedAttribute];
            setQuery(newQuery);
        } else {
            const newQuery = query;
            newQuery.nationalWeatherService[checkedAttribute] = {};
            setQuery(newQuery);
        };

        console.log(query)
    };

    return <div className={"bg-gray-200 w-1/2 mx-4"}>
        <div className={"w-full flex justify-between"}>
            <h1 className={"ml-20 mt-2"}>National Weather Service</h1>
            <input type={"checkbox"} onChange={checkNationalWeatherService}></input>
        </div>
        {displayAttribute ? <ul className={"ml-20 mt-2 font-lora"}>
            {availableAttribute.map(each_attribute => {
                return(
                    <li className={"flex justify-between"} key={uuidv4()}>
                        <div className={"flex"}>
                            <input type={"checkbox"} className={"mr-2"} onChange={() => handelCheckAttribute(each_attribute)}></input>
                            <p>{each_attribute}</p>
                        </div>
                        <div>
                            <input placeholder={"time from"} className={"text-center"}></input>
                            <input placeholder={"time to"} className={"text-center"}></input>
                        </div>
                    </li>
                )
            })}
        </ul> : null}
    </div>;
}

export default AttributeSelector;