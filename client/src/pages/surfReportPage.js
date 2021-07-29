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
        fetchAll();
    }, []);

    useEffect(() => {
        console.log(resWave);
    }, [resWave]);

    useEffect(() => {
        console.log(resTides)
    }, [resTides]);

    useEffect(() => {
        console.log(resWind)
    }, [resWind]);

    useEffect(() => {
        console.log(resWeather)
    }, [resWeather]);

    const fetchWaveReport = async () => {
        API.get(`/wave?spotId=${searchReqSpotId}`).then((res) => {
                setResWave(res);
            });
    };

    const fetchTidesReport = async () => {
        API.get(`/tides?spotId=${searchReqSpotId}`).then((res) => {
                setResTides(res);
            });
    };

    const fetchWindReport = async () => {
        API.get(`/wind?spotId=${searchReqSpotId}`).then((res) => {
                setResWind(res);
            });
    };

    const fetchWeatherReport = async () => {
        API.get(`/weather?spotId=${searchReqSpotId}`).then((res) => {
                setResWeather(res);
            });
    };

    const fetchAll = async () => {
        fetchWaveReport();
        fetchTidesReport();
        fetchWindReport();
        fetchWeatherReport();
    }

    return (
        <div className="page">
            <div className="registerCont">
                <h1 className="appTitle">{searchReqName}</h1>
            </div>
        </div>
    )

}

export default SurfReportPage;