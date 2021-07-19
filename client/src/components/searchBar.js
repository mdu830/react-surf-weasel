import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search'; import {
    Navbar,
    Button
} from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    marginLeft: {
        marginLeft: theme.spacing(3),
    },
    marginBottom: {
        marginBottom: theme.spacing(.5),
    },
}));

const SearchBar = () => {

    const classes = useStyles();


    return (
        <Navbar className="searchBar" color="light" light expand="md">
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item className={classes.marginLeft}>
                        <SearchIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Beach Search" />
                    </Grid>
                    <Grid item className={classes.marginLeft}>
                        <Button className="beachButtons" outline color="success">Atlantic Beach NC</Button>{' '}
                    </Grid>
                    <Grid item className={classes.marginLeft}>
                        <Button className="beachButtons" outline color="success">Indian Beach NC</Button>{' '}
                    </Grid>
                    <Grid item className={classes.marginLeft}>
                        <Button className="beachButtons" outline color="success">Emerald Isle NC</Button>{' '}
                    </Grid>
                    <Grid item className={classes.marginLeft}>
                        <Button className="beachButtons" outline color="success">Topsail NC</Button>{' '}
                    </Grid>
                </Grid>
            </div>
            <div>

            </div>
        </Navbar>
    )
}

export default SearchBar;
