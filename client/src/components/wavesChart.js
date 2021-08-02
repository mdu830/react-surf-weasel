import React, { createRef, useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import moment from 'moment';
const WaveChart = (data) => {

    const myData = data.data;

    const currentDate = Date.now();

    const [dataArray, setDataArray] = useState(null);
    
    useEffect(() => {
        setDataArray(myData.map(element => element));

    }, [myData]);

    

    useEffect(() => {
        if(dataArray === null) { 
            return 
        } else { 
            console.log(currentDate); 
            console.log(dataArray); 
        }

    }, [dataArray]);

    


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