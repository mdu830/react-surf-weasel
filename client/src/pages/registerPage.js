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
                <div className="registerCont">
                    <Animate>
                        <div>
                            <h1>Register</h1>

                        </div>
                    </Animate>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default RegisterPage;