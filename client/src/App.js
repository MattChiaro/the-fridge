import "./App.css";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";



function App() {
  


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
