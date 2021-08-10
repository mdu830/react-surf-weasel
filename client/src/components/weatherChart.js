import React, { useEffect, useState } from 'react';
import dayClear from '../assets/images/Icons/weather/dayClear.png';
import dayMist from '../assets/images/Icons/weather/dayMist.png';
import dayMostlyClear from '../assets/images/Icons/weather/dayMostlyClear.png';
import dayMostlyCloudy from '../assets/images/Icons/weather/dayMostlyCloudy.png';
import dayBriefShowers from '../assets/images/Icons/weather/dayBriefShowers.png';
import dayThunderShowers from '../assets/images/Icons/weather/dayThunderShowers.png';
import nightClear from '../assets/images/Icons/weather/nightClear.png';
import nightMist from '../assets/images/Icons/weather/nightMist.png';
import foggy from '../assets/images/Icons/weather/foggy.png'
import nightMostlyClear from '../assets/images/Icons/weather/nightMostlyClear.png';
import cloudy from '../assets/images/Icons/weather/cloudy.png';
import nightBriefShowers from '../assets/images/Icons/weather/nightBriefShowers.png';
import heavyShowers from '../assets/images/Icons/weather/heavyShowers.png';
import nightThunderStorms from '../assets/images/Icons/weather/nightThunderStorms.png';
import heavyThunderStorms from '../assets/images/Icons/weather/heavyThunderStorms.png';

const WeatherChart = React.memo(data => {

    const weatherData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timestampArray]);

    const getWeatherCondition = (data) => {
        let weather;
        switch (data) {
            case 'CLEAR':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={dayClear} />
                        <p>Clear {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'MIST':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={dayMist} />
                        <p>Mist {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'FOG':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={foggy} />
                        <p>Foggy {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'MOSTLY_CLEAR':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={dayMostlyClear} />
                        <p>Mostly Clear {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'MOSTLY_CLOUDY':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={dayMostlyCloudy} />
                        <p>Mostly Cloudy {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'CLOUDY':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={cloudy} />
                        <p>Cloudy {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'OVERCAST':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={cloudy} />
                        <p>Overcast {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'BRIEF_SHOWERS_POSSIBLE':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={dayBriefShowers} />
                        <p>Possible Brief Showers {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'BRIEF_SHOWERS':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={dayBriefShowers} />
                        <p>Brief Showers {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'LIGHT_SHOWERS':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={dayBriefShowers} />
                        <p>Light Showers {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'HEAVY_SHOWERS':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={heavyShowers} />
                        <p>Heavy Showers {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'THUNDER_SHOWERS':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={dayThunderShowers} />
                        <p>Thunder Showers {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'THUNDER_STORMS':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={dayThunderShowers} />
                        <p>Thunder Storms {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'HEAVY_THUNDER_STORMS':
                weather =
                    <div id="weatherChartDay" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={heavyThunderStorms} />
                        <p>Heavy Thunder Storms {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_CLEAR':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={nightClear} />
                        <p>Clear {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_MIST':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={nightMist} />
                        <p>Mist {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_FOG':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={foggy} />
                        <p>Foggy {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_MOSTLY_CLEAR':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={nightMostlyClear} />
                        <p>Mostly Clear {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_MOSTLY_CLOUDY':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={nightMostlyClear} />
                        <p>Mostly Cloudy {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_CLOUDY':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={cloudy} />
                        <p>Cloudy {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_OVERCAST':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={cloudy} />
                        <p>Overcast {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_BRIEF_SHOWERS_POSSIBLE':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={nightBriefShowers} />
                        <p>Possible Brief Showers {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_BRIEF_SHOWERS':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={nightBriefShowers} />
                        <p>Brief Showers {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_LIGHT_SHOWERS':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={nightBriefShowers} />
                        <p>light Showers {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_HEAVY_SHOWERS':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={heavyShowers} />
                        <p>Heavy Showers {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_THUNDER_SHOWERS':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={nightThunderStorms} />
                        <p>Thunder Showers {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_THUNDER_STORMS':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={nightThunderStorms} />
                        <p>Thunder Storms {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            case 'NIGHT_HEAVY_THUNDER_STORMS':
                weather =
                    <div id="weatherChartNight" className="mt-2">
                        <h4>Weather</h4>
                        <img alt="" className="weatherIcon" src={heavyThunderStorms} />
                        <p>Heavy Thunder Storms {Math.round(currentData.temperature)}&deg;F</p>
                    </div>
                break
            default:
                weather = 
                <div id="weatherChart" className="mt-2">
                    <h4>Weather</h4>
                    <p>No Report</p>
                </div>
        }
        return weather
    }

    if (currentData === null) {
        return (null)
    }

    return (
        getWeatherCondition(currentData.condition)
    )

})

export default WeatherChart;