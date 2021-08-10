import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap'


const SwellsChart = React.memo(data => {

    const waveData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);
    const [currentSwells, setSwells] = useState([]);

    useEffect(() => {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timestampArray]);

    useEffect(() => {
        if (currentData != null) {
            const swells = currentData.swells;

            swells.map((element) => {
                if (element.height > 0.5) {
                    setSwells(arr => [...arr, element]);
                }
                return element;
            });
        }
    }, [currentData]);

    const getDirection = (angle) => {
        const directions = ["N", "NW", "W", "SW", "S", "SE", "E", "NE"];
        const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
        return directions[index];
    }

    if (currentData === null) {
        return (null)
    }

    return (
        <div id="swellsChart" className="text-center">
            <h4>Swells</h4>
            <Row>
                {currentSwells.map((element, index) => {
                    return (
                        <Col xs="" sm=" " key={index}>
                            <p className={element.optimalScore === 1 ? "fontYellow mt-2" : 
                            element.optimalScore === 2 ? "fontGreen mt-2" : "mt-2"}
                            >{Math.round(element.height)}ft every {element.period}s
                                from {getDirection(element.direction)}</p>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
})

export default SwellsChart;