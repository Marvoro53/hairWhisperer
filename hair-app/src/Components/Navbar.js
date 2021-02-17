import React from 'react';

class Navbar extends React.Component{
  render() {
      return (
          <div>
            <ul id="nav">
              <li><a href="">Home</a></li>
              <li><a href="">Images</a></li>
              <li><a href="">Contact me!</a></li>
            </ul>
          </div>
      );
  }
}


export default Navbar
