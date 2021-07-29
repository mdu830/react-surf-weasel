import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const WaveBarChart = (data) => {

    const myData = data.data;

    useEffect(() => {
        console.log(myData);
    }, []);


    return (
        <div>
            <h1>BarChart</h1>
            <Bar />
        </div>
    )
}

export default WaveBarChart;