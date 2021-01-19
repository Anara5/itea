import React from 'react';
import classes from './Home.modules.css';
//import bridge from '../../images/Homepage/bridge.jpg';

const Home = () => {
    return (
        <div className={classes.Homepage}>

            {/*<img src={bridge} className={classes.BridgePhoto}></img>*/}
            
            <div className={classes.HomeText}>
                there will be a homepage info.
            </div>
            
        </div>
    )
}

export default Home;