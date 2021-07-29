import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SurfReportPage = (props) => {

    const searchReqName = props.location.state.beachName.trim();;
    const searchReqSpotId = props.location.state.spotId;

    const [resWave, setResWave] = useState({});
    const [resTides, setResTides] = useState({});
    const [resWind, setResWind] = useState({});
    const [resWeather, setResWeather] = useState({});

    const API = axios.create({
        baseURL: `https://services.surfline.com/kbyg/spots/forecasts/`
    });

    useEffect(() => {
        async function fetchWaveReport() {
            API.get(`/wave?spotId=${searchReqSpotId}`).then((res) => {
                setResWave(res);
                console.log(res);
            });
        };

        async function fetchTidesReport() {
            API.get(`/tides?spotId=${searchReqSpotId}`).then((res) => {
                setResTides(res);
                console.log(res);
            });
        };

        async function fetchWindReport() {
            API.get(`/wind?spotId=${searchReqSpotId}`).then((res) => {
                setResWind(res);
                console.log(res);
            });
        };

        async function fetchWeatherReport() {
            API.get(`/weather?spotId=${searchReqSpotId}`).then((res) => {
                setResWeather(res);
                console.log(res);
            });
        };

        fetchWaveReport();
        fetchTidesReport();
        fetchWindReport();
        fetchWeatherReport();
    }, []);

    return (
        <div className="page">
            <div className="registerCont">
                <h1 className="appTitle">{searchReqName}</h1>
            </div>
        </div>
    )

}

export default SurfReportPage;