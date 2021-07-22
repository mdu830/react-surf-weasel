import React, { useState } from 'react';
import Carousel from '../components/carousel'
import SearchBar from '../components/searchBar';
import Footer from '../components/footer';
import Header from '../components/header';

const Homepage = (props) => {
  
  return (

    <div>
      <Header />
        <Carousel />
        <SearchBar />
      <Footer />
    </div>
  );
}

export default Homepage;