import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap'


const WindChart = (data) => {

    const windData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
        // get timestamps from all objects and set timestampArray
        setTimestampArray(windData.map((element) => element.timestamp));
    }, [windData]);

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
            windData.map(element => {
                if (element.timestamp === closestTime) {
                    setCurrentData(element);
                }
                return element;
            });
        }
    }, [timestampArray]);

    const getDirection = (angle) => {
        const directions = ["N", "NW", "W", "SW", "S", "SE", "E", "NE"];
        const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
        return directions[index];
    }

    const getDegrees = () => {
        const degrees = Math.round(currentData.direction)
        return degrees;
    }

    const getWindSpeed = () => {
        const speed = Math.round(currentData.speed);
        return speed;
    }

    if (currentData === null) {
        return (null)
    }

    const getCurrentDirection = getDirection(currentData.direction);
    const getCurrentDegrees = getDegrees();
    const getCurrentWindSpeed = getWindSpeed();

    return (
        <div id="windChart" className="m-1">
            <h4>Wind</h4>
            <p>Coming from: {getCurrentDirection} ({getCurrentDegrees}&deg;)</p>
            <p>Speed: {getCurrentWindSpeed} knots</p>
        </div>
    )

}

export default WindChart;