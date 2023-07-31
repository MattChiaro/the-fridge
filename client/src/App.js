// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Calendar from "./pages/calendar";


// import Landing from "./components/Landing";
// import Login from './components/Login-Modal';

function App() {

  return (
    <div className="App">
      {/* <Landing /> */}
    {/* <Login /> */}
    <Calendar />
    
    </div>
  );
}

export default App;
