import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import {useEffect, useState} from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Calendar from './pages/calendar';
import Home from './pages/home';
import Post from './pages/post';
import Profile from './pages/profile';


function App() {
  
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (

    <>
    <Router>
      <Header />

      <Routes>
        <Route 
          path= '/'
          element = {<Home />}        
        />
        <Route 
        path = '/calendar'
        element = {<Calendar/>}
        />
        <Route 
        path = '/post'
        element = {<Post/>}
        />
        <Route 
        path = '/profile'
        element = {<Profile/>}
        />
    <div className="App">
      {/* Nav Bar */}
      <div>
        <Navbar />
      </div>
    </div>
    </Routes>
    </Router>
    </>
  );
}

export default App;
