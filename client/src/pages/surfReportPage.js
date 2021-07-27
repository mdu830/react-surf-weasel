import React, { useEffect, useState } from 'react';

const SurfReportPage = (props) => {

    useEffect(() => {
        console.log(props.location.state.value);
    }, []);
    
    return (
        <div className="page">
            <div className="registerCont">
                <h1>{props.location.state.value}</h1>
            </div>
        </div>
    )

}

export default SurfReportPage;