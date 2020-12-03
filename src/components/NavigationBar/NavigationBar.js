import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './NavigationBar.modules.css';

class NavigationBar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

render() {

    const currentLocation = this.state.currentLocation;

    return (

        <div className={classes.NavigationBarItems}>
            <h1 className={classes.navbarLogo}>ITEA</h1>
            
            <div className={classes.nav}>
                <div onClick={this.handleClick} className="menu-icon">
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <div className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <Link to='/' className={currentLocation === '/' ? 'link-selected' : 'link-item'}>HOME</Link>
                    <Link to='/services' className={currentLocation === '/services' ? 'link-selected' : 'link-item'}>SERVICES</Link>
                    <Link to='/contactus' className={currentLocation === '/contactus' ? 'link-selected' : 'link-item'}>CONTACT US</Link>
                </div>
                </div>
           </div>
        )
    }
}

export default NavigationBar;