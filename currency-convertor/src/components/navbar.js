import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand} from 'reactstrap';

const Navbars = () => {
    return(
        <Navbar
        className=""
        color="dark"
        dark
      >
        <NavbarBrand>
          Currency Convertor
        </NavbarBrand>
      </Navbar>
    )
}

export default Navbars;