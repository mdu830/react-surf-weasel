/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import waveOrange from '../assets/images/waveOrange.jpg'
import waveBlue from '../assets/images/waveBlue.jpg'
import waveGreen from '../assets/images/waveGreen.jpg'

// import { fadeIn } from 'react-animations'
// import styled, {keyframes} from 'styled-components'

// const Animate = styled.div`animation: 1.3s ${keyframes`${fadeIn}`} `;

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

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                fade={true}
                slide={false}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className="slideImg" src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
            <CarouselControl direction="next" directionText=" " onClickHandler={next} />
        </Carousel>
    );
}

export default homePage;