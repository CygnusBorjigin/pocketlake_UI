import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import EachAttribute from "./EachAttribute";

// TODO:
//  * Add automatic refresh to the query display

const AttributeSelector = (props) => {
    const availableAttribute = ['temperature', 'dewpoint', 'maxTemperature', 'minTemperature', 'relativeHumidity', 'apparentTemperature', 'heatIndex', 'windChill', 'skyCover', 'windDirection', 'windSpeed', 'windGust', 'weather', 'hazards', 'probabilityOfPrecipitation', 'quantitativePrecipitation', 'iceAccumulation', 'snowfallAmount', 'snowLevel', 'ceilingHeight', 'visibility', 'transportWindSpeed', 'transportWindDirection', 'mixingHeight', 'hainesIndex', 'lightningActivityLevel', 'twentyFootWindSpeed', 'twentyFootWindDirection', 'waveHeight', 'wavePeriod', 'waveDirection', 'primarySwellHeight', 'primarySwellDirection', 'secondarySwellHeight', 'secondarySwellDirection', 'wavePeriod2', 'windWaveHeight', 'dispersionIndex', 'pressure', 'probabilityOfTropicalStormWinds', 'probabilityOfHurricaneWinds', 'potentialOf15mphWinds', 'potentialOf25mphWinds', 'potentialOf35mphWinds', 'potentialOf45mphWinds', 'potentialOf20mphWindGusts', 'potentialOf30mphWindGusts', 'potentialOf40mphWindGusts', 'potentialOf50mphWindGusts', 'potentialOf60mphWindGusts', 'grasslandFireDangerIndex', 'probabilityOfThunder', 'davisStabilityIndex', 'atmosphericDispersionIndex', 'lowVisibilityOccurrenceRiskIndex', 'stability', 'redFlagThreatIndex'];
    const [displayAttribute, setDisplayAttribute] = useState(false);
    const [displayGeoLocation, setDisplayGeolocation] = useState(false);
    const [query, setQuery] = useState({});

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const checkNationalWeatherService = () => {
        setDisplayAttribute(prev => !prev);
        const newQuery = Object.keys(query).includes("nationalWeatherService") ? {} : {"nationalWeatherService": {}};
        setQuery(newQuery);
        props.updateQuery(newQuery);
    };

    const checkGeolocation = () => {
        if (Object.keys(query.nationalWeatherService).includes("geolocation")) {
            const newQuery = {
                "nationalWeatherService": {}
            };
            setQuery(newQuery);
            props.updateQuery(newQuery);
        } else {
            const newQuery = {
                "nationalWeatherService": {
                    "geolocation": {
                        "latitude": 0.0,
                        "longitude": 0.0
                    }
                }
            };

            setQuery(newQuery);
            props.updateQuery(newQuery);
        }
    };

    const handelChangeLad = (event) => {
        setLatitude(event.target.value);
        const newQuery = query;
        newQuery.nationalWeatherService.geolocation.latitude = event.target.value;
        setQuery(newQuery);
        props.updateQuery(newQuery);
    }

    const handelChangeLong = (event) => {
        setLongitude(event.target.value);
        const newQuery = query;
        newQuery.nationalWeatherService.geolocation.longitude = event.target.value;
        setQuery(newQuery);
        props.updateQuery(newQuery);
    }

    const handelCheckAttributeName = (attributeName) => {
        if(Object.keys(query.nationalWeatherService.geolocation).includes(attributeName)){
            const newQuery = query;
            delete newQuery.nationalWeatherService.geolocation[attributeName];
            setQuery(newQuery);
            props.updateQuery(newQuery);
        } else {
            const newQuery = query;
            newQuery.nationalWeatherService.geolocation[attributeName] = {
                "timeFrom": 0,
                "timeTo": 0
            };
            setQuery(newQuery);
            props.updateQuery(newQuery)
        };
    };

    const handelChangeAttributeValue = (attributeName, valueName, newValue) => {
        const newQuery = query;
        newQuery.nationalWeatherService.geolocation[attributeName][valueName] = newValue;
        setQuery(newQuery);
        props.updateQuery(newQuery);
    }

    return(
    <div className={"bg-gray-200 w-2/3 mx-4"}>
        <div className={"w-full flex justify-between"}>
            <h1 className={"ml-20 mt-2 cursor-pointer"} onClick={() => setDisplayGeolocation(prev => !prev)}>National Weather Service</h1>
            <input type={"checkbox"} onChange={checkNationalWeatherService}></input>
        </div>
        {displayGeoLocation ?
            <div className={"w-full flex justify-between"}>
                <h1 className={"ml-28 mt-2 cursor-pointer"} onClick={() => setDisplayAttribute(prev => !prev)}>geolocation</h1>
                <div>
                    <label className={"mr-2"}>latitude</label>
                    <input
                        placeholder={"latitude"}
                        value={latitude}
                        className={"text-center"}
                        id={"lad"}
                        onChange={handelChangeLad}></input>
                    <label
                        className={"mx-2"}>
                        longitude
                    </label>
                    <input
                        placeholder={"longitude"}
                        value={longitude}
                        className={"text-center"}
                        id={"lon"}
                        onChange={handelChangeLong}>
                    </input>
                    <input
                        type={"checkbox"}
                        onChange={checkGeolocation}
                        className={"ml-2"}>
                    </input>
                </div>
            </div> : null}
        {displayAttribute && displayGeoLocation ? <ul className={"ml-40 mt-2 font-lora"}>
            {availableAttribute.map(each_attribute => {
                return(
                    <EachAttribute
                        key={uuidv4()}
                        attributeName={each_attribute}
                        handelCheckAttribute={handelCheckAttributeName}
                        handelChangeValue={handelChangeAttributeValue}>
                    </EachAttribute>
                )
            })}
        </ul> : null}
    </div>
    );
}

export default AttributeSelector;