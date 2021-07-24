import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import {
    Navbar,
    Button
} from 'reactstrap';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('A beach was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <Navbar className="searchBar pb-3 pt-3" color="light" light expand="md">
                <Grid item>
                    <form className="searchForm" onSubmit={this.handleSubmit}>
                        <SearchIcon className="searchIcon" />
                        <TextField id="standard-basic" type="text" label="Beach Search" value={this.state.value} onChange={this.handleChange} />
                    </form>
                </Grid>
                <Grid item>
                    <Button className="beachButtons" outline color="success">Atlantic Beach NC</Button>{' '}
                    <Button className="beachButtons" outline color="success">Indian Beach NC</Button>{' '}
                    <Button className="beachButtons" outline color="success">Emerald Isle NC</Button>{' '}
                    <Button className="beachButtons" outline color="success">Topsail NC</Button>{' '}
                </Grid>
            </Navbar>
        )
    }
}

export default SearchBar;
