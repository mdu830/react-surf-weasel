import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { useMediaQuery } from 'react-responsive'

// import moment from 'moment';


const ForcastGraph = (data) => {

    const waveData = data.data;
    const currentTme = Date.now() / 1000;
    const [timestampArray, setTimestampArray] = useState(null);
    const [currentData, setCurrentData] = useState(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' });

    useEffect(() => {
        // get timestamps from all objects and set timestampArray
        setTimestampArray(waveData.map((element) => element.timestamp));
    }, [waveData]);

    useEffect(() => {
        if (timestampArray != null) {
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

    if (currentData === null) {
        return (null)
    }

    // console.log(currentData);

    const graphData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "This Graph",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Does Nothing",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
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
            <div className="mobileGraph justify-content-center pt-2 mb-1">
                <h4>Forcast</h4>
                <Line className="lineG" options={options} data={graphData} />
            </div>
        )
    }

    return (
        <div className="graph justify-content-center pb-5 mb-2">
            <h4 className="pt-3">Forcast</h4>
            <Line className="lineG pb-2" options={options} data={graphData} />
        </div>
    )

}

export default ForcastGraph;