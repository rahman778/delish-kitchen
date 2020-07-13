import React from 'react';
import Hero from '../components/Hero/Hero';
import CuisineSlider from '../components/CuisineSilder/CuisineSlider';
import LatestRecipes from '../components/LatestRecipes/LatestRecipes';
import MainVideo from '../components/MainVideo/MainVideo';


const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <CuisineSlider />
            <LatestRecipes />
            <MainVideo />
        </React.Fragment>
    )
}

export default Home
