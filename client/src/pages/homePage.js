/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

import waveOrange from '../assets/images/waveOrange.jpg'
import waveBlue from '../assets/images/waveBlue.jpg'
import waveGreen from '../assets/images/waveGreen.jpg'

const items = [
    {
        src: waveOrange,
        altText: '',
        caption: ''
    },
    {
        src: waveBlue,
        altText: '',
        caption: ''
    },
    {
        src: waveGreen,
        altText: '',
        caption: ''
    }
];

const homePage = (props) => {


    return (
        <Carousel>
            {items.map((item) => <img className="slideImg" src={item.src} alt={item.altText} />)}
        </Carousel>
    );
}

export default homePage;