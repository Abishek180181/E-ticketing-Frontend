import React,{useState,useEffect} from 'react'
import { Link,NavLink } from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {GiTicket} from 'react-icons/gi'

const Menu = (props) => {
    let {}=props
    return (
        <React.Fragment>
       
       <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavLink className="nav-link" activeClassName="active"  to="/" exact> Home </NavLink>
                    <NavLink className="nav-link" activeClassName="active"  to="/about"> About Us</NavLink>
                    <NavLink className="nav-link" activeClassName="active"  to="/contact"> Contact</NavLink>
                    <NavLink className="nav-link buy-tic px-4" activeClassName="active"  to="/login"> <GiTicket style={{fontSize:"25px",fontWeight:"bold"}}/>  Buy Tickets</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

      
                    
        </React.Fragment>
    )
}

export default Menu
