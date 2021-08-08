import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap'


const WindChart = React.memo(data => {

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

    const getDegrees = (angle) => {
        const degrees = Math.round(angle)
        return degrees;
    }

    const getWindSpeed = (value) => {
        const speed = Math.round(value);
        return speed;
    }

    if (currentData === null) {
        return (null)
    }

    return (
        <div className="windChart mt-2">
            <h4>Wind</h4>
            <p className={currentData.optimalScore === 1 ? "fontYellow" : 
        currentData.optimalScore === 2 ? "fontGreen" : ""}>from {getDirection(currentData.direction)} ({getDegrees(currentData.direction)}&deg;)</p>
            <p>Speed: {getWindSpeed(currentData.speed)} kts</p>
        </div>
    )

})

export default WindChart;