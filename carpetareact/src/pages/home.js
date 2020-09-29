import React from 'react';
import Header from '../Components/header';
import Hello from '../Components/hero';
import Jobs from '../Components/jobs';

const Home = () => {
    return (
        <>
        <Header></Header>
        <Hello></Hello>
        <Jobs></Jobs>
        {/* <Footer></Footer> */}
        </>
    );
}

export default Home;