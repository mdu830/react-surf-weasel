import React, { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';
import axios from 'axios';


const SurfReportPage = (props) => {

    const searchReqName = props.location.state.beachName;
    const searchReqSpotId = props.location.state.spotId;

    useEffect(() => {
        fetchWaveReport();
        fetchTideReport();
        fetchWindReport();
        fetchWeatherReport();
    }, []);

    // waves query
    const reportWaveUrl = `https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=${searchReqSpotId}`;

    const [resWave, setResWave] = useState({});

    const fetchWaveReport = async () => {
        const res = await axios(reportWaveUrl);
        const waveData = res;
        setResWave(waveData);
    };
    // tides query
    const reportTidesUrl = `https://services.surfline.com/kbyg/spots/forecasts/tides?spotId=${searchReqSpotId}`;

    const [resTides, setResTides] = useState({});

    const fetchTideReport = async () => {
        const res = await axios(reportTidesUrl);
        const tidesData = res;
        setResTides(tidesData);
    };
    // wind query
    const reportWindUrl = `https://services.surfline.com/kbyg/spots/forecasts/wind?spotId=${searchReqSpotId}`;

    const [resWind, setResWind] = useState({});

    const fetchWindReport = async () => {
        const res = await axios(reportWindUrl);
        const windData = res;
        setResWind(windData);
    };
    // weather query
    const reportWeatherUrl = `https://services.surfline.com/kbyg/spots/forecasts/weather?spotId=${searchReqSpotId}`;

    const [resWeather, setResWeather] = useState({});

    const fetchWeatherReport = async () => {
        const res = await axios(reportWeatherUrl);
        const weatherData = res;
        setResWeather(weatherData);
    };

    console.log(resWave);
    console.log(resTides);
    console.log(resWind);
    console.log(resWeather);


    return (
        <div className="page">
            <div className="registerCont">
                <h1 className="appTitle">{searchReqName}</h1>
            </div>
        </div>
    )

}

export default SurfReportPage;