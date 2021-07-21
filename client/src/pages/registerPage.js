import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { fadeInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Animate = styled.div`animation: 1.3s ${keyframes`${fadeInDown}`} `;


const RegisterPage = () => {

    return (
        <>
            <div className="page">
                <Header />
                <Animate>
                    <div className="registerCont m-3">
                        <h1>Register</h1>

                    </div>
                </Animate>
                <Footer />
            </div>
        </>
    )
}

export default RegisterPage;