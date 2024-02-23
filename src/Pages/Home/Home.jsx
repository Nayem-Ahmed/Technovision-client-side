import React from 'react';
import Banner from './Banner';
import HomeProducts from '../../Components/Products/HomeProducts';
import About from './About';
const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <About></About>
        </div>
    );
};

export default Home;