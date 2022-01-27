import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;