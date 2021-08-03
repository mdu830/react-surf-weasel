import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import WaveChart from '../components/waveChart';
import TidesChart from '../components/tidesChart';

const SurfReportPage = (props) => {

    const searchReqName = props.location.state.beachName.trim();
    const searchReqSpotId = props.location.state.spotId;

    const [isLoading, setLoading] = useState(true);
    const [response, setResponse] = useState({
        wave: [],
        tides: [],
        wind: [],
        weather: []
    });

    const API = axios.create({
        baseURL: `https://services.surfline.com/kbyg/spots/forecasts/`
    });

    useEffect(() => {
        async function fetchReport() {
            const res = API.get(`/wave?spotId=${searchReqSpotId}`);
            const res2 = API.get(`/tides?spotId=${searchReqSpotId}`);
            const res3 = API.get(`/wind?spotId=${searchReqSpotId}`);
            const res4 = API.get(`/weather?spotId=${searchReqSpotId}`);
            setResponse({
                wave: (await res).data.data.wave,
                tides: (await res2).data.data.tides,
                wind: (await res3).data.data.wind,
                weather: (await res4).data.data.weather
            });
            setLoading(false)
        };
        fetchReport();
    }, [searchReqSpotId]);

    // console.log(response);

    if (isLoading) {
        return (
            <CircularProgress className="spinner" />
        )
    }

    return (
        <div className="page">
            <div className="registerCont">
                <h1 className="appTitle">{searchReqName}</h1>
                <WaveChart data={response.wave} />
                <TidesChart data={response.tides}/>
            </div>
        </div>
    )

}

export default SurfReportPage;