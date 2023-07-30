import React from 'react';
import videoBG from '../assets/FridgeLandingShrank.mp4';
// import logo from '../assets/logo192.png';


const Landing = () => {
    return (
        <div id='videoContainer'>
            <video src={videoBG} autoPlay loop muted />
            <button id='loginBtn'>Login</button>
            {/* unable to get image into top right corner. revisit issue later */}
            {/* <img src={logo} alt="logo" id='landingLogo' /> */}
        </div>
    );
}

export default Landing;