import React, { useState } from 'react';
import Carousel from '../components/carousel'
import SearchBar from '../components/searchBar';
import Footer from '../components/footer';


const homePage = (props) => {

  return (
    <div>
      <Carousel />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default homePage;