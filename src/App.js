import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/homm/Home';
import Education from './components/Education/Education';
import Services from './Services';
import Addmission from './components/Admission/Addmission';
import About from './components/About/About';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';





const App = () => {
 



  return (

    <>
      {/* <Footer></Footer>
      <NotFound></NotFound>
      <Education></Education>
      <CourseFee></CourseFee>
      <Addmission></Addmission>
      <About></About> */}

      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path='/home'>
            <Home />
          </Route>
          <Route  path="/education">
            <Education />

          </Route>



          <Route path='/services'>
            <Services />

          </Route>
          <Route  path='/addmission'>
            <Addmission />

          </Route>
          <Route path='/about'>
            <About />

          </Route>
          <Route  path='*'>
            <NotFound />

          </Route>
        </Switch>
        <Footer></Footer>
      </Router>


    </>
  );
};

export default App;
