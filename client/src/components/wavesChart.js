import React, { createRef, useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
import moment from 'moment';
const WaveChart = (data) => {

    const myData = data.data;
    
   
    // const [forcastTime, setForcastTime] = useState([]);
    
    useEffect(() => {

        const CurrentDate = Date.now();
        // const formatDate = moment(CurrentDate).format();
        
        console.log(CurrentDate);



        for(let i = 0; i < myData.length; i++) {

            // const time = new Date(myData[i].timestamp*1000);
            // const formatTime = moment(time).format();
            // console.log(formatTime)

            const time = myData[i].timestamp*1000;
            console.log(time)
;        }
}, [myData]);


    return (
        <div>
            <h1>BarChart</h1>
        </div>
    )
}

export default WaveChart;