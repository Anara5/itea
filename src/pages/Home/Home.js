import React from 'react';
import classes from './Home.modules.css';
import homepage from '../../images/Homepage/bridge.jpg';

const Home = () => {
    return (
        <div className={classes.Homepage}>
            <img src={homepage}></img>
            Homepage
        </div>
    )
}

export default Home;