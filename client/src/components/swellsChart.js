import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap'


const SwellsChart = (data) => {

    const waveData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);
    const [currentSwells, setSwells] = useState([]);
    const [isSwells, setISSwells] = useState(false);

    useEffect(() => {
        // get timestamps from all objects and set timestampArray
        setTimestampArray(waveData.map((element) => element.timestamp));
    }, [waveData]);

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
            waveData.map(element => {
                if (element.timestamp === closestTime) {
                    setCurrentData(element);
                }
                return element;
            });
        }

    }, [timestampArray]);

    useEffect(() => {
        if (currentData != null) {
            const swells = currentData.swells;

            swells.map((element) => {
                if (element.height > 1) {
                    setSwells(arr => [...arr, element]);
                }
                return element;

            });
            setISSwells(true);
        }
    }, [currentData]);

    useEffect(() => {
        if (isSwells === true) {
            console.log(currentSwells);

        }
    }, [isSwells]);

    const getDirection = (angle) => {
        const directions = ["N", "NW", "W", "SW", "S", "SE", "E", "NE"];
        const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
        return directions[index];
    }

    if (currentData === null) {
        return (null)
    }

    return (
        <div id="swellsChart" className="m-1">
            <h4>Swells</h4>
            <Row>
                {currentSwells.map((element, index) => {
                    return (
                        <Col>
                            <p className="mt-2" key={index}>{Math.round(element.height)}ft every {element.period}s
                                from {getDirection(element.direction)}</p>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )

}

export default SwellsChart;