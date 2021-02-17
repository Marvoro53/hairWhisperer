import React from 'react';
import Intro from '../Components/Intro';

function HomepageImage() {
  const url = 'https://www.flaticon.com/svg/vstatic/svg/40/40739.svg?token=exp=1613435176~hmac=94ed135cbb6cafca6e7988673de2ceb0';
  return (
    <>
    <img src={url} style={{width: 300, height: 300}} alt='Image of silloet' />
    <p>
        My Fingers whisper to the hair and makes it grow..  
    </p>
        <Intro />
      <div className="iframe">
        <h2>Watch this tutorial for Box Braids!</h2>
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/spdmhk2najs" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;
       gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
        </>
  );
}

export default HomepageImage;