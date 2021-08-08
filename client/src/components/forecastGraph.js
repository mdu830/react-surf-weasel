import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { useMediaQuery } from 'react-responsive'

import moment from 'moment';


const ForcastGraph = (data) => {

    const forecastData = data.data;
    const today = new Date()
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [timestampArray, setTimestampArray] = useState(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' });

    useEffect(() => {
        setTimestampArray(forecastData.map((element) => element.timestamp)
        .filter(timestamp => timestamp >= tomorrow.setHours(0, 0, 0, 0)  / 1000));
    }, [forecastData]);

    if (timestampArray === null) {
        return (null)
    }
    
    const uniqueDay = [...new Set(timestampArray.map(item => moment(item * 1000).format('ddd').replace(/^0+/, '')))]

    console.log(uniqueDay)

    const graphData = {
        labels: uniqueDay,
        datasets: [
            {
                label: "min",
                data: [2, 4, 6, 3, 2, 1],
                fill: false,
                borderColor: "#742774"
            },
            {
                label: "max",
                data: [3, 5, 8, 3, 4, 6],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };

    const options = {
        responsive: isTabletOrMobile ? false : true,
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
    // console.log(currentData);

    if (isTabletOrMobile) {
        return (
            <div className="mobileGraph justify-content-center pt-2 mb-2">
                <h4>5 Day Forcast</h4>
                <Line className="lineG" options={options} data={graphData} />
            </div>
        )
    }

    return (
        <div className="graph justify-content-center pb-5 mb-2">
            <h4 className="pt-3">5 Day Forcast</h4>
            <Line className="lineG pb-2" options={options} data={graphData} />
        </div>
    )

}

export default ForcastGraph;