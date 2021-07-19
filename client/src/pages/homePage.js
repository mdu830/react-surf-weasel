import React, { useState } from 'react';
import Carousel from '../components/carousel'
import SearchBar from '../components/searchBar';


const homePage = (props) => {

  return (
    <div>
      <Carousel />
      <SearchBar />
    </div>
  );
}

export default homePage;