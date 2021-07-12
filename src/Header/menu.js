import React,{useState,useEffect} from 'react'
import { Link,NavLink } from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {GiTicket} from 'react-icons/gi'
import logo from '../assets/logo/newlogo.png'

const Menu = (props) => {
    let {}=props
    return (
        <React.Fragment>
       
       <Navbar bg="light" expand="md">
        <Container>
            <Navbar.Brand href="#home"><img src={logo} className="w-75" alt="merocare" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <NavLink className="nav-link navv" activeClassName="active"  to="/" exact> Home </NavLink>
                <NavLink className="nav-link navv" activeClassName="active"  to="/about"> About Us</NavLink>
                <NavLink className="nav-link navv" activeClassName="active"  to="/contact"> Contact</NavLink>
                <NavLink className="nav-link navv buy-tic px-4"  activeClassName="buy_ticket_btn"  to="/login"> <GiTicket style={{fontSize:"25px",fontWeight:"bold"}}/>  Buy Tickets</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

      
                    
        </React.Fragment>
    )
}

export default Menu
