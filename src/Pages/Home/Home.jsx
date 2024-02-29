import React from 'react';
import Banner from './Banner';
import HomeProducts from '../../Components/Products/HomeProducts';
import About from './About';
import Contact from './Contact';
const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;