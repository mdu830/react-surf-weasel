import React from 'react';
import Carousel from '../components/carousel'
import SearchBar from '../components/searchBar';


const Homepage = () => {

  return (

    <div className="page">
      <Carousel />
      <SearchBar />
    </div>
  );
}

export default Homepage;