import React, { useEffect, useState } from 'react';
import { setRef, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { Navbar, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";


const SearchBar = (props) => {

    // constructor(props) {
    //     super(props);
    //     this.state = { value: '' };

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    let history = useHistory();

    const [searchValue, setSearchValue] = useState("");
    // const [buttonValue, setButtonValue] = useState("");

    
    const handleSubmit = (evt) => {
        
        if(searchValue !== "") {

            console.log('A beach was submitted: ' + searchValue);

            evt.preventDefault(history.push({
                pathname: '/report', 
                state: {
                    value: searchValue,
                    
                }
            }));

        } else {
            evt.preventDefault();
            alert("That ain't a beach");

        }

    }

    const handleButtonSubmit = (e) => {
        // setButtonValue(e.target.value);
        e.preventDefault(history.push({
            pathname: '/report', 
            state: {
                value: e.target.value,
                
            }
        }));
         
    }

    return (
        <Navbar className="searchBar" color="light" light expand="md">
            <Grid item>
                <form className="searchForm" onSubmit={handleSubmit}>
                    <SearchIcon className="searchIcon" />
                    <TextField id="standard-basic" type="text" label="Beach Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                </form>
            </Grid>
            <Grid item>
                <Button className="beachButtons" value="Atlantic Beach NC" onClick={(e) => {handleButtonSubmit(e)}} outline color="success">Atlantic Beach NC</Button>{' '}
                <Button className="beachButtons" value="Indian Beach NC" onClick={(e) => handleButtonSubmit(e)} outline color="success">Indian Beach NC</Button>{' '}
                <Button className="beachButtons" value="Emerald Isle NC" onClick={(e) => handleButtonSubmit(e)} outline color="success">Emerald Isle NC</Button>{' '}
                <Button className="beachButtons" value="Topsail NC" onClick={(e) => handleButtonSubmit(e)} outline color="success">Topsail NC</Button>{' '}
            </Grid>
        </Navbar>
    )
}

export default SearchBar;
