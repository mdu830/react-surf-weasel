import React, { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';
import axios from 'axios';


const SurfReportPage = (props) => {

    const [resData, setResData] = useState({});

    const searchReqName = props.location.state.beachName;
    const searchReqSpotId = props.location.state.spotId;

    const reportWaveUrl = `https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=${searchReqSpotId}`;

    // console.log(reportWaveUrl);
    // console.log(searchReqSpotId);

    useEffect(() => {
        fetchSurfReport();
    }, []);

    const fetchSurfReport = async () => {
        const res = await axios(reportWaveUrl);
        const jsonData = res;
        setResData(jsonData);
    };

    console.log(resData);

    // const [type, setType] = useState({
    //     wind: 'wind?',
    //     wave: 'wave?',
    //     tides: 'tides?',
    //     weather: 'weather?'
    // });

    // const [spotId, setSpotId] = useState({
    //     atlanticBeach: '5842041f4e65fad6a7708a4e',
    //     emeraldIsle: '5842041f4e65fad6a7708a4d',
    //     topsailBeach: '5842041f4e65fad6a7708a4b'
    // });


    return (
        <div className="page">
            <div className="registerCont">
                <h1>{searchReqName}</h1>
            </div>
        </div>
    )

}

export default SurfReportPage;