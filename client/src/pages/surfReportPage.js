import React, { useEffect, useState } from 'react';

const SurfReportPage = (props) => {

    useEffect(() => {
        console.log(props.location.state.beachName);
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