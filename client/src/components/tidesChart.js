import React, { useEffect, useState } from 'react';
import moment from 'moment';


const TidesChart = React.memo(data => {

    const tidesData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);
    const [highLowTides, setHighLowTides] = useState(null);

    useEffect(() => {
        setTimestampArray(tidesData.map((element) => element.timestamp));
    }, [tidesData]);

    useEffect(() => {
        if (timestampArray !== null) {
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
            tidesData.map(element => {
                if (element.timestamp === closestTime) {
                    setCurrentData(element);
                }
                return element;
            });

            const futureTide = closestTime + 24250;

            tidesData.map(element => {
                if (element.timestamp <= futureTide && element.type !== "NORMAL") {
                    const nextTide = {time: element.timestamp, type: element.type};
                    setHighLowTides(nextTide);
                   return nextTide
                }
                return highLowTides
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timestampArray]);

    console.log(currentData);

    if (currentData && highLowTides != null) {

        const formattedTideTime = moment(highLowTides.time * 1000).format('h:mm a');

        return (
            <div id="tideChart" className="mt-2">
                <h4>Tide</h4>
                <p>Ht: {currentData.height} ft</p>

                {highLowTides.type === "LOW" ? 
                <p>Low tide at {formattedTideTime}</p> : 
                <p>High tide at {formattedTideTime}</p>}
            </div>
        )
    }
    return (null)
})

export default TidesChart;