import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { Navbar, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import API from '../components/baseUrl';



const SearchBar = () => {

    let history = useHistory();

    const [searchValue, setSearchValue] = useState("");


    // const getSpotId = () => {
    //     const res = API.get(`/search/site?q=${searchValue}`);
    //     console.log(res)
    // }
    
    const handleSubmit = (evt) => {

        async function getSpotId() {
            evt.preventDefault();
            const res = API.get(`/search/site?q=${searchValue.replace(" ", "").toLowerCase()}`);
            console.log((await res).data[0].suggest['spot-suggest'][0].options[0]._id);
        }
        
        if(searchValue !== "" ) {
            // console.log('A beach was submitted: ' + searchValue);
            getSpotId();


            // evt.preventDefault(history.push({
            //     pathname: '/report', 
            //     state: {
            //         beachName: searchValue,
            //         spotId: '',
                    
            //     }
            // }));

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
                    <TextField 
                    disabled
                    id="standard-basic" 
                    type="text" 
                    label="Beach Search" 
                    value={searchValue} 
                    onChange={(e) => setSearchValue(e.target.value)} />
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
