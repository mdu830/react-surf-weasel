import React, { useEffect, useState } from 'react';
// import moment from 'moment';

const WeatherChart = (data) => {

    const waveData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);

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
            // console.log(closestTime);
            waveData.map(element => {
                if (element.timestamp === closestTime) {
                    setCurrentData(element);
                }
                return element;
            });
        }

    }, [timestampArray]);


    if (currentData === null) {
        return (null)
    }
    // console.log(currentData);
    // console.log(waveData);
    // const readableTime = moment(currentData.timestamp * 1000).format('hh:mm a').replace(/^0+/, '');

    return (
        <div id="weatherChart" className="p-2 m-2">
            <p>Weather</p>
        </div>
    )

}

export default WeatherChart;