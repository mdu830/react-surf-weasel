import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SurfReportPage = (props) => {

    const searchReqName = props.location.state.beachName.trim();;
    const searchReqSpotId = props.location.state.spotId;

    // const urlQueries = [{
    //     wave: 'wave?',
    //     tides: 'tides?',
    //     wind: 'wind?',
    //     waether: 'weather?'
    // }];

    const API = axios.create({
        baseURL: `https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=${searchReqSpotId}`
    });

    useEffect(() => {
        fetchWaveReport();
    }, []);

    const [resWave, setResWave] = useState({});

    const fetchWaveReport = async () => {
        API.get('/').then((res) => {
                setResWave(res);
                console.log(res.data.data.wave);
            });
    };

        // waves query
    // const reportWaveUrl = `https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=${searchReqSpotId}`;
    
    // // tides query
    // const reportTidesUrl = `https://services.surfline.com/kbyg/spots/forecasts/tides?spotId=${searchReqSpotId}`;

    // // wind query
    // const reportWindUrl = `https://services.surfline.com/kbyg/spots/forecasts/wind?spotId=${searchReqSpotId}`;

    // // weather query
    // const reportWeatherUrl = `https://services.surfline.com/kbyg/spots/forecasts/weather?spotId=${searchReqSpotId}`;


    return (
        <div className="page">
            <div className="registerCont">
                <h1 className="appTitle">{searchReqName}</h1>
            </div>
        </div>
    )

}

export default SurfReportPage;