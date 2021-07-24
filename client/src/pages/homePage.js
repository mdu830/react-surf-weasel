import React, { useState } from 'react';
import Carousel from '../components/carousel'
import SearchBar from '../components/searchBar';
import Footer from '../components/footer';


const Homepage = () => {

  return (

    <div className="page">
      <Carousel />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default Homepage;