import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";

function App() {
  
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="App">
      {/* Nav Bar */}
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
