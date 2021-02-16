import React from 'react';

function HomepageImage() {
  const url = 'https://www.flaticon.com/svg/vstatic/svg/40/40739.svg?token=exp=1613435176~hmac=94ed135cbb6cafca6e7988673de2ceb0';
  return (
    <img src={url} style={{width: 300, height: 300}} alt='Image of silloet' />
  );
}

export default HomepageImage;