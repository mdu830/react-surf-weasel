import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import moment from 'moment';
const WaveChart = (data) => {

    const myData = data.data;

    const currentDate = Date.now() / 1000;

    const [timestampArray, setTimestampArray] = useState(null);

    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
        setTimestampArray(myData.map((element) => element.timestamp));
    }, [myData]);

    useEffect(() => {
        if (timestampArray != null) {
            // console.log(currentDate); 
            const closestTime = timestampArray.reduce((a, b) => {
                let aDiff = Math.abs(a - currentDate);
                let bDiff = Math.abs(b - currentDate);

                // eslint-disable-next-line eqeqeq
                if (aDiff == bDiff) {
                    return a > b ? a : b;
                } else {
                    return bDiff < aDiff ? b : a;
                }
            });
            // console.log(closestTime);
            myData.map(element => {
                if (element.timestamp === closestTime) {
                    setCurrentData(element);
                }
                return element;
            });
        }

    }, [timestampArray]);

    if (currentData != null) {
        console.log(currentData);
    }

    // const formatDate = moment(CurrentDate).format();
    // const time = new Date(myData[i].timestamp*1000);
    // const formatTime = moment(time).format();
    // console.log(formatTime)

    // for (let i = 0; i < myData.length; i++) {

    //     const time = myData[i].timestamp * 1000;
    //     console.log(time);
    // }

    return (
        <div>
            <h1>BarChart</h1>
        </div>
    )
}

export default WaveChart;