import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { Navbar, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";


const SearchBar = () => {

    let history = useHistory();

    const [searchValue, setSearchValue] = useState("");
    
    const handleSubmit = (evt) => {
        
        if(searchValue !== "" ) {
            console.log('A beach was submitted: ' + searchValue);
            evt.preventDefault(history.push({
                pathname: '/report', 
                state: {
                    beachName: searchValue,
                    spotId: '',
                    
                }
            }));

        } else {
            evt.preventDefault();
            alert("That ain't a beach");
        }

    }

    const handleButtonSubmit = (e) => {
        // console.log(e.target.name);

        e.preventDefault(history.push({
            pathname: '/report', 
            state: {
                beachName: e.target.name,
                spotId: e.target.value

            }
        }));
         
    }

    return (
        <Navbar className="searchBar" color="light" light expand="md">
            <Grid item>
                <form className="searchForm" onSubmit={handleSubmit}>
                    <SearchIcon className="searchIcon" />
                    <TextField disabled id="standard-basic" type="text" label="Beach Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                </form>
            </Grid>
            <Grid item>
                <Button 
                className="beachButtons" 
                name={"Atlantic Beach NC"}
                value={"5842041f4e65fad6a7708a4e"} 
                onClick={(e) => {handleButtonSubmit(e)}} 
                outline color="success"
                >Atlantic Beach NC
                </Button>{' '}
                <Button 
                className="beachButtons" 
                name="Emerald Isle NC"
                value="5842041f4e65fad6a7708a4d" 
                onClick={(e) => handleButtonSubmit(e)} 
                outline color="success"
                >Emerald Isle NC</Button>{' '}
                <Button 
                className="beachButtons" 
                name="Topsail NC"
                value="5842041f4e65fad6a7708a4b" 
                onClick={(e) => handleButtonSubmit(e)} 
                outline color="success"
                >Topsail NC</Button>{' '}
            </Grid>
        </Navbar>
    )
}

export default SearchBar;
