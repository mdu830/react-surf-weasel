import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { useMediaQuery } from 'react-responsive'

import moment from 'moment';


const ForcastGraph = React.memo(data => {

    const forecastData = data.data;

    const today = new Date()
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [fiveDayData, setFiveDayData] = useState(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' });

    useEffect(() => {
        setFiveDayData(forecastData.map((element) => element)
        .filter(element => element.timestamp >= tomorrow.setHours(0, 0, 0, 0)  / 1000 
        && (moment(element.timestamp * 1000).format('h') === '6')));
    }, [forecastData]);

    if (fiveDayData === null) {
        return (null)
    }
    
    const graphData = {
        labels: fiveDayData.map((element) => moment(element.timestamp * 1000).format('ddd A')),
        datasets: [
            {
                label: "min",
                data: fiveDayData.map((element) => element.surf.min),
                fill: true,
                borderColor: "#742774"
            },
            {
                label: "max",
                data: fiveDayData.map((element) => element.surf.max),
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

    if (isTabletOrMobile) {
        return (
            <div className="mobileGraph justify-content-center pt-2 mb-2">
                <h4>5 Day Forcast (ft)</h4>
                <Line className="lineG" options={options} data={graphData} />
            </div>
        )
    }

    return (
        <div className="graph justify-content-center pb-5 mb-2">
            <h4 className="pt-3">5 Day Forcast (ft)</h4>
            <Line className="lineG pb-2" options={options} data={graphData} />
        </div>
    )

})

export default ForcastGraph;