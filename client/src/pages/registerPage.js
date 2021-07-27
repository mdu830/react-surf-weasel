import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { Button } from 'reactstrap';

const RegisterPage = () => {

    return (
        <>
            <div className="page">
                <div className="registerCont">
                    <div className="m-4">
                        <h1>Register</h1>
                        <form className="">
                            <Grid >
                                <Grid item xs={12}>
                                    <TextField required className="p-2" id="standard-required" label="Email Address" defaultValue="" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required className="p-2" id="standard-disabled" type="password" label="Password" defaultValue="" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required className="p-2" id="standard-disabled" type="password" label="Confirm Password" defaultValue="" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField className="p-2" id="standard-disabled" label="Favorite Beach" defaultValue="" />
                                </Grid>
                            </Grid>
                            <Button className="p-2 signupButton" color="outline-success">Sign Up</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;