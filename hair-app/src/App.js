import React from 'react';
import './App.css';
import HomepageImage from './Components/HomepageImage';
import Intro from './Components/Intro';
import Images from './Components/Images';
// import Contact from './Components/Contact';
// import Reviews from './Components/Reviews'
import Navbarr from './Components/Navbar'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbarr />
        <HomepageImage />
        <p>
        My Fingers whisper to the hair and makes it grow..  
        </p>
        <Intro />
        <div>

    </div>
      </header>
      <Images />
      {/* <Contact />
      <Reviews /> */}
    </div>
  );
}

export default App;
