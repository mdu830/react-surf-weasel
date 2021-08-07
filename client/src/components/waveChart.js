import React, { useEffect, useState } from 'react';
import moment from 'moment';

const WaveChart = (data) => {

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
    
    const readableTime = moment(currentData.timestamp * 1000).format('hh:mm a').replace(/^0+/, '');

    return (
        <div className={currentData.surf.optimalScore === 1 ? "chartYellow mt-1" : 
        currentData.surf.optimalScore === 2 ? "chartGreen mt-1" : "waveChart mt-1"}>
            <h4>Surf</h4>
            <p>Height: {Math.round(currentData.surf.min)}-{Math.round(currentData.surf.max)}ft</p>
            <p> at {readableTime}</p>
        </div>
    )

}

export default WaveChart;