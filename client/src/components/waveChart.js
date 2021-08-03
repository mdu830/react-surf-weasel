import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';

const WaveChart = (data) => {

    const waveData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
        setTimestampArray(waveData.map((element) => element.timestamp));
        // console.log(waveData);
    }, [waveData]);

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
            waveData.map(element => {
                if (element.timestamp === closestTime) {
                    setCurrentData(element);
                }
                return element;
            });
        }

    }, [timestampArray]);

    if (currentData != null) {
        // console.log(currentData);
        
        const readableTime = moment(currentData.timestamp * 1000).format('hh:mm a').replace(/^0+/, '');

        // Bar Chart Data and Options
        const graphData = {
            labels: ['Min', 'Max'],
            datasets: [
                {
                    label: ` ${readableTime} ` + 'Surf Height (FT)',
                    data: [currentData.surf.min, currentData.surf.max],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1,
                    borderRadius: 5,
                }
            ]
        }
        const options = {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        };

        return (
            <div className="p-2">
                <Bar data={graphData} options={options} />
            </div>
        )
    }

    return (
        <div />
    )

}

export default WaveChart;