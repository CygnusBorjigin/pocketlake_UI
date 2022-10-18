import AttributeSelector from "./AttributeSelector";
import ReactJson from 'react-json-view';
import {useState} from "react";
import axios from "axios";
import eachAttribute from "./EachAttribute";

const GuiSample = () => {
    const [query, setQuery] = useState({});

    const getForcastLink = async (lat, long) => {
        const config = {
            method: 'get',
            url: `https://api.weather.gov/points/${lat},${long}`,
        };

        try{
            const res = await axios(config);
            const resLink = res.data.properties.forecastGridData;
            return {
                "success": true,
                "message": resLink
            };
        } catch (e) {
            return {
                "success": false,
                "message": "invalid geolocation"
            }
        }

    };

    const getWeatherInfo = async (forcastLink) => {
        const config = {
            method: 'get',
            url: forcastLink,
        };

        try{
            const res = await axios(config);
            const resData = res.data.properties;
            return {
                "success": true,
                "message": resData
            };
        } catch (e) {
            return {
              "success": false,
              "message": e
            };
        }
    }

    const cleanData = (rawData, requiredAttribute) => {
        const cleanedData = requiredAttribute.map(eachAttribute => {
            if(Object.keys(rawData).includes(eachAttribute)){
                const res = {
                    "attribute": eachAttribute,
                    "data": rawData[eachAttribute]
                }

                return res;
            }
        });

        return cleanedData;
    }

    const handelGetData = async () => {
        const forcastLink = await getForcastLink(42.360100, -71.058900);
        if(forcastLink.success){
            const weatherInfo = await getWeatherInfo(forcastLink.message);
            const resData = cleanData(weatherInfo.message, Object.keys(query.nationalWeatherService.geolocation));
        } else {
        }
    }


    return(
        <div className={"h-screen w-screen bg-gray-200"}>
            <h1 className={"text-center pt-4 font-cinzel text-3xl mb-4"}>ThrorMap Graphical User Interface Demo</h1>
            <div className={"border-t-3 bottom-black w-screen flex"}>
                <AttributeSelector updateQuery={setQuery}/>
                <div className={"w-1/3 px-4"}>
                    <button className={"w-full border-2 border-gray-600 rounded-md mb-4 hover:bg-gray-600 hover:text-amber-50"} onClick={handelGetData}>Get Data</button>
                    <ReactJson src={query} />
                </div>
            </div>
        </div>
    )
}

export default GuiSample;