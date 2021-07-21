import React from 'react';
import Header from '../components/header';
import {
    Container,
    Card
} from 'reactstrap';
import { TextField, Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const LoginPage = () => {

    const classes = useStyles();

    return (
        <>

            <div className="page">
                <Header />
                <Container className="mt-5">
                    <Card className="m-2 pt-5 pb-5">
                        <form className={classes.root} noValidate autoComplete="off">
                            <div>
                                <h1>Login</h1>
                            </div>
                            <div>
                                <AccountCircle className="accountCircle"/>
                                <TextField id="" label="Email" />
                            </div>
                            <div>
                                <TextField id="" type="password" label="Password" defaultValue="" />
                            </div>
                        </form>
                    </Card>
                </Container>
            </div>
        </>
    )
}

export default LoginPage;