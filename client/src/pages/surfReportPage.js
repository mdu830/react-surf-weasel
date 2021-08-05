import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import WaveChart from '../components/waveChart';
import TidesChart from '../components/tidesChart';
import WindChart from '../components/windChart';
import WeatherChart from '../components/weatherChart';

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
            <div className="registerCont pb-4">
                <h1 className="appTitle">{searchReqName}</h1>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <WaveChart id="waveChart" data={response.wave} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <TidesChart id="tidesChart" data={response.tides} />
                        </Col>
                        <Col xs="6">
                            <WindChart id="windChart" data={response.wind} />
                        </Col>
                        <Col xs="6">
                            <WeatherChart id="weather" data={response.weather} />
                        </Col>
                        <Col xs="6"></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )

}

export default SurfReportPage;