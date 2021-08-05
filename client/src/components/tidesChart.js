import React, { useEffect, useState } from 'react';
import moment from 'moment';


const TidesChart = (data) => {

    const tidesData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);
    const [highLowTides, setHighLowTides] = useState(null);

    useEffect(() => {
        // get timestamps from all objects and set timestampArray
        setTimestampArray(tidesData.map((element) => element.timestamp));
    }, [tidesData]);

    useEffect(() => {
        if (timestampArray != null) {
            // find closest time to current time
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
            tidesData.map(element => {
                if (element.timestamp === closestTime) {
                    setCurrentData(element);
                }
                return element;
            });

            // get next high/low tide
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
    }, [timestampArray]);

    if (currentData && highLowTides != null) {
        // console.log(highLowTides)
        // console.log(tidesData);
        const formattedTideTime = moment(highLowTides.time * 1000).format('hh:mm a').replace(/^0+/, '');

        return (
            <div id="tideChart" className="p-2 m-2">
                <p>Tide</p>
                <h6>Height: {currentData.height} ft</h6>

                {highLowTides.type === "LOW" ? 
                <h6>Low tide at {formattedTideTime}</h6> : 
                <h6>High tide at {formattedTideTime}</h6>}
            </div>
        )
    }
    return (null)
}

export default TidesChart;