import React, { useEffect, useState } from 'react';

const SurfReportPage = (props) => {

    const searchReq = props.location.state.beachName;

    const [type, setType] = useState({

        wind: 'wind',
        wave: 'wave',
        tides: 'tides',
        weather: 'weather'
    });

    const [spotId, setSpotId] = useState({
        atlanticBeach: '5842041f4e65fad6a7708a4e',
        emeraldIsle: '5842041f4e65fad6a7708a4d,',
        topsailBeach: '5842041f4e65fad6a7708a4b'
    });

    let apiUrl = `https://services.surfline.com/kbyg/spots/forecasts/${type}?spotId=${spotId}`;

    // if(searchReq === "Atlantic Beach NC") {
    //     setSpotId(spotId.abSpotId)
    // }

    useEffect(() => {
        console.log(searchReq);
        console.log(apiUrl);

    }, []);

    return (
        <div className="page">
            <div className="registerCont">
                <h1>{props.location.state.beachName}</h1>
            </div>
        </div>
    )

}

export default SurfReportPage;