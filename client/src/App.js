// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import Landing from "./components/Landing";
import Login from './components/Login-Modal';

function App() {

  return (
    <div className="App">
      <Landing />
    {/* <Login /> */}
    
    </div>
  );
}

export default App;
