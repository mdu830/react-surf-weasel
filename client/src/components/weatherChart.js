import React, { useEffect, useState } from 'react';

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
                weather = <p>Clear</p>
                break
            case 'MIST':
                weather = <p>Mist</p>
                break
            case 'FOG':
                weather = <p>Foggy</p>
                break
            case 'MOSTLY_CLEAR':
                weather = <p>Mostly Clear</p>
                break
            case 'MOSTLY_CLOUDY':
                weather = <p>Mostly Cloudy</p>
                break
            case 'CLOUDY':
                weather = <p>Cloudy</p>
                break
            case 'OVERCAST':
                weather = <p>Overcast</p>
                break
            case 'BRIEF_SHOWERS_POSSIBLE':
                weather = <p>Possible Brief Showers</p>
                break
            case 'BRIEF_SHOWERS':
                weather = <p>Brief Showers</p>
                break
            case 'LIGHT_SHOWERS':
                weather = <p>Light Showers</p>
                break
            case 'HEAVY_SHOWERS':
                weather = <p>Heavy Showers</p>
                break
            case 'THUNDER_SHOWERS':
                weather = <p>Thunder Showers</p>
                break
            case 'THUNDER_STORMS':
                weather = <p>Thunder Storms</p>
                break
            case 'HEAVY_THUNDER_STORMS':
                weather = <p>Heavy Thunder Storms</p>
                break
            case 'NIGHT_CLEAR':
                weather = <p>Night Clear</p>
                break
            case 'NIGHT_MIST':
                weather = <p>Night Mist</p>
                break
            case 'NIGHT_FOG':
                weather = <p>Night Foggy</p>
                break
            case 'NIGHT_MOSTLY_CLEAR':
                weather = <p>Night Mostly Clear</p>
                break
            case 'NIGHT_MOSTLY_CLOUDY':
                weather = <p>Night Mostly Cloudy</p>
                break
            case 'NIGHT_CLOUDY':
                weather = <p>Night Cloudy</p>
                break
            case 'NIGHT_OVERCAST':
                weather = <p>Night Overcast</p>
                break
            case 'NIGHT_BRIEF_SHOWERS_POSSIBLE':
                weather = <p>Night Possible Brief Showers</p>
                break
            case 'NIGHT_BRIEF_SHOWERS':
                weather = <p>Night Brief Showers</p>
                break
            case 'NIGHT_LIGHT_SHOWERS':
                weather = <p>Night Light Showers</p>
                break
            case 'NIGHT_HEAVY_SHOWERS':
                weather = <p>Night Heavy Showers</p>
                break
            case 'NIGHT_THUNDER_SHOWERS':
                weather = <p>Night Thunder Showers</p>
                break
            case 'NIGHT_THUNDER_STORMS':
                weather = <p>Night Thunder Storms</p>
                break
            case 'NIGHT_HEAVY_THUNDER_STORMS':
                weather = <p>Night Heavy Thunder Storms</p>
                break
            default:
                weather = <p>Error No Report</p>
        }
        return weather
    }

    if (currentData === null) {
        return (null)
    }

    const temperature = Math.round(currentData.temperature);
    const weatherInfo = getWeatherConditionImg(currentData.condition);

    return (
        <div id="weatherChart" className="m-1">
            <h4>Weather</h4>
            {weatherInfo}
            <p>Temperature: {temperature}&deg;F</p>
        </div>
    )

}

export default WeatherChart;