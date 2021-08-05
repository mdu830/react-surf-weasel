import React, { useEffect, useState } from 'react';
// import moment from 'moment';

const WeatherChart = (data) => {

    const weatherData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
        // get timestamps from all objects and set timestampArray
        setTimestampArray(weatherData.map((element) => element.timestamp));
    }, [weatherData]);

    useEffect(() => {
        if (timestampArray != null) {
            const closestTime = timestampArray.reduce((a, b) => {
                let aDiff = Math.abs(a - currentTme);
                let bDiff = Math.abs(b - currentTme);
                // eslint-disable-next-line eqeqeq
                if (aDiff == bDiff) {
                    return a > b ? a : b;
                } else {
                    return bDiff < aDiff ? b : a;
                }
            });
            // console.log(closestTime);
            weatherData.map(element => {
                if (element.timestamp === closestTime) {
                    setCurrentData(element);
                }
                return element;
            });
        }

    }, [timestampArray]);

    const getWeatherConditionImg = (data) => {

        let weather;

        switch (data) {
            case 'CLEAR':
                weather = <h6>Clear</h6>
                break
            case 'MIST':
                weather = <h6>Mist</h6>
                break
            case 'FOG':
                weather = <h6>Foggy</h6>
                break
            case 'MOSTLY_CLEAR':
                weather = <h6>Mostly Clear</h6>
                break
            case 'MOSTLY_CLOUDY':
                weather = <h6>Mostly Cloudy</h6>
                break
            case 'CLOUDY':
                weather = <h6>Cloudy</h6>
                break
            case 'OVERCAST':
                weather = <h6>Overcast</h6>
                break
            case 'BRIEF_SHOWERS_POSSIBLE':
                weather = <h6>Possible Brief Showers</h6>
                break
            case 'LIGHT_SHOWERS':
                weather = <h6>Light Showers</h6>
                break
            case 'HEAVY_SHOWERS':
                weather = <h6>Heavy Showers</h6>
                break
            case 'THUNDER_SHOWERS':
                weather = <h6>Thunder Showers</h6>
                break
            case 'THUNDER_STORMS':
                weather = <h6>Thunder Storms</h6>
                break
            case 'HEAVY_THUNDER_STORMS':
                weather = <h6>Heavy Thunder Storms</h6>
                break
            case 'NIGHT_CLEAR':
                weather = <h6>Night Clear</h6>
                break
            case 'NIGHT_MIST':
                weather = <h6>Night Mist</h6>
                break
            case 'NIGHT_FOG':
                weather = <h6>Night Foggy</h6>
                break
            case 'NIGHT_MOSTLY_CLEAR':
                weather = <h6>Night Mostly Clear</h6>
                break
            case 'NIGHT_MOSTLY_CLOUDY':
                weather = <h6>Night Mostly Cloudy</h6>
                break
            case 'NIGHT_CLOUDY':
                weather = <h6>Night Cloudy</h6>
                break
            case 'NIGHT_OVERCAST':
                weather = <h6>Night Overcast</h6>
                break
            case 'NIGHT_BRIEF_SHOWERS_POSSIBLE':
                weather = <h6>Night Possible Brief Showers</h6>
                break
            case 'NIGHT_LIGHT_SHOWERS':
                weather = <h6>Night Light Showers</h6>
                break
            case 'NIGHT_HEAVY_SHOWERS':
                weather = <h6>Night Heavy Showers</h6>
                break
            case 'NIGHT_THUNDER_SHOWERS':
                weather = <h6>Night Thunder Showers</h6>
                break
            case 'NIGHT_THUNDER_STORMS':
                weather = <h6>Night Thunder Storms</h6>
                break
            case 'NIGHT_HEAVY_THUNDER_STORMS':
                weather = <h6>Night Heavy Thunder Storms</h6>
                break
            default:
                weather = <h6>Error</h6>
        }
        return weather
    }

    if (currentData === null) {
        return (null)
    }

    // console.log(weatherData);
    // console.log(currentData);
    const temperature = Math.round(currentData.temperature);
    const weatherInfo = getWeatherConditionImg(currentData.condition);


    return (
        <div id="weatherChart" className="p-2 m-2">
            <p>Weather</p>
            {weatherInfo}
            <h6>Temperature: {temperature}&deg;F</h6>
        </div>
    )

}

export default WeatherChart;