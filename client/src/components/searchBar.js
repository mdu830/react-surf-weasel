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

    async function getSpotId(evt) {
        const res = await API.get(`/search/site?q=${searchValue.toLowerCase()}`)
        
        if(res.data[0].suggest['spot-suggest'][0].options.length === 0) {
            alert("no beaches matched your search");
            return
        }

        const beach = res.data[0].suggest['spot-suggest'][0].options[0].text;
        const state = res.data[0].suggest['spot-suggest'][0].options[0]._source.breadCrumbs[1];
        const spot = res.data[0].suggest['spot-suggest'][0].options[0]._id

        console.log(searchValue);
        console.log(res);
        console.log(spot);
        
        evt.preventDefault(history.push({
            pathname: '/report',
            state: {
                beachName: beach + ` ${state}`,
                spotId: spot,
            }
        }));
        
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (searchValue === '') {
            alert('no beach entered');
            return
        }
        getSpotId(evt);
    }

    const handleButtonSubmit = (e) => {
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
                    onClick={(e) => { handleButtonSubmit(e) }}
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
