import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { fadeInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Grid, TextField } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core';
import { Button } from 'reactstrap';


const Animate = styled.div`animation: 1.3s ${keyframes`${fadeInDown}`} `;

const RegisterPage = () => {

    return (
        <>
            <div>
                <Header />
                <Animate>
                    <div className="registerCont">
                        <div className="m-4">
                            <h1>Register</h1>
                            <div className="">
                                <Grid >
                                    <Grid item xs={12}>
                                        <TextField required className="m-2" id="standard-required" label="Email Address" defaultValue="" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField required className="m-2" id="standard-disabled" type="password" label="Password" defaultValue="" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField required className="m-2" id="standard-disabled" type="password" label="Confirm Password" defaultValue="" />
                                    </Grid>
                                </Grid>
                                <Button className="m-2 signupButton" color="outline-success">Sign Up</Button>
                            </div>
                        </div>
                    </div>
                </Animate>
                <Footer />
            </div>
        </>
    )
}

export default RegisterPage;