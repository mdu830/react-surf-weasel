import React, { useEffect, useState } from 'react';
import moment from 'moment';

const WaveChart = React.memo(data => {

    const waveData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);

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

    if (currentData === null) {
        return (null)
    }
    
    const readableTime = moment(currentData.timestamp * 1000).format('h:mm a');

    return (
        <div className="waveChart mt-2">
            <h4>Surf</h4>
            <p className={currentData.surf.optimalScore === 1 ? "fontYellow" : 
        currentData.surf.optimalScore === 2 ? "fontGreen" : ""}>Ht: {Math.round(currentData.surf.min)}-{Math.round(currentData.surf.max)}ft</p>
            <p> at {readableTime}</p>
        </div>
    )
})

export default WaveChart;