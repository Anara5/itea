import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';

const App = () => {

  const location = useLocation();

  return (
    <>
      <NavigationBar currentLocation={location.pathname} />
      
        <Switch>
          <Route path='/services' render={() => <Services />} />
          <Route path='/contactus' render={() => <ContactUs />} />
          <Route exact path='/' render={() => <Home />} />
        </Switch>
    </>
  );
};

export default App;