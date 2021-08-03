import React, { useEffect, useState } from 'react';
// import moment from 'moment';

const TidesChart = (data) => {

    const tidesData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);

    const [highLowTides, setHighLowTides] = useState(null);

    // get timestamps from all objects 
    useEffect(() => {
        setTimestampArray(tidesData.map((element) => element.timestamp));
        setHighLowTides(tidesData.map((element) => [element.timestamp, element.type]));
        // console.log(tidesData);
    }, [tidesData]);

    console.log(highLowTides);

    useEffect(() => {
        if (timestampArray != null) {
            // console.log(currentTme); 
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
        }

    }, [timestampArray]);

    if (currentData != null) {
        console.log(currentData);
        
        // const readableTime = moment(currentData.timestamp * 1000).format('hh:mm a').replace(/^0+/, '');

        return (
            <div className="p-2">
                <p>Tide</p>

            </div>
        )
    }

    return (
        <div />
    )

}

export default TidesChart;