import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { CircularProgress } from '@material-ui/core';
import API from '../components/baseUrl';
import WaveChart from '../components/waveChart';
import TidesChart from '../components/tidesChart';
import WindChart from '../components/windChart';
import WeatherChart from '../components/weatherChart';
import SwellsChart from '../components/swellsChart';
import ForcastGraph from '../components/forecastGraph';
import ErrorBoundary from '../components/errorBoundary';

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

    async function fetchReport() {
        const res = API.get(`/kbyg/spots/forecasts/wave?spotId=${searchReqSpotId}`);
        const res2 = API.get(`/kbyg/spots/forecasts/tides?spotId=${searchReqSpotId}`);
        const res3 = API.get(`/kbyg/spots/forecasts/wind?spotId=${searchReqSpotId}`);
        const res4 = API.get(`/kbyg/spots/forecasts/weather?spotId=${searchReqSpotId}`);

        setResponse({
            wave: (await res).data.data.wave,
            tides: (await res2).data.data.tides,
            wind: (await res3).data.data.wind,
            weather: (await res4).data.data.weather
        });
        setLoading(false)
    }

    useEffect(() => {
        fetchReport();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchReqSpotId]);

    if (isLoading) {
        return (
            <CircularProgress className="spinner" />
        )
    }

    return (
        <div id="surfReportPage" className="page">
            <div className="reportCont pb-4">
                <h1 className="appTitle mb-2">
                    {searchReqName}
                </h1>
                <Container>
                    <Row id="reportRow" className="justify-content-center">
                        <Col xs="12" sm="12">
                            <ForcastGraph data={response.wave} />
                        </Col>
                        <Col xs="12" sm="12">
                            <SwellsChart data={response.wave} />
                        </Col>
                        <Col xs="12" sm="3">
                            <WaveChart data={response.wave} />
                        </Col>
                        <Col xs="12" sm="3">
                            <ErrorBoundary>
                                <TidesChart data={response.tides} />
                            </ErrorBoundary>
                        </Col>
                        <Col xs="12" sm="3">
                            <WindChart data={response.wind} />
                        </Col>
                        <Col xs="12" sm="3">
                            <WeatherChart data={response.weather} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )

}

export default SurfReportPage;