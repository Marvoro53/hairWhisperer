import React from 'react'

import {
  Navbar,
  NavItem,
  NavLink,
} from 'reactstrap';

function Navbarr() {
    return (
        <div className="Navbar">
      <Navbar color="light" light expand="md">
        <NavItem>
              <NavLink href="/Components/HomepageImage">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Components/Images">Images</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Components/Contact">Contact me!</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Components/Reviews">Reviews</NavLink>
            </NavItem>
      </Navbar>
    </div>
    )
}

export default Navbarr
