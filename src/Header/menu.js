import React,{useState,useEffect} from 'react'
import { Link,NavLink } from 'react-router-dom'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import {GiTicket} from 'react-icons/gi'
import logo from '../assets/logo/newlogo.png'
import { MenuItem } from '@material-ui/core';
import profile from '../assets/profile.jpg';

const Menu = (props) => {
    let {}=props
    return (
        <React.Fragment>
       
       <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home"><img src={logo} className="w-75" alt="merocare" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <NavLink className="nav-link navv" activeClassName="active"  to="/" exact> Home </NavLink>
                <NavLink className="nav-link navv" activeClassName="active"  to="/about"> About Us</NavLink>
                <NavLink className="nav-link navv" activeClassName="active"  to="/contact"> Contact</NavLink>
                <NavLink className="nav-link navv buy-tic px-3"  activeClassName="buy_ticket_btn"  to="/login"> <GiTicket style={{fontSize:"25px",fontWeight:"bold"}}/>  Buy Tickets</NavLink>

                

            </Nav>
            <Nav className="mx-right">
                    <div className="pull-left">
                        <img className="thumbnail-image pimage" 
                            src={profile} 
                            alt="user pic" roundedCircle
                        />
                                               
                    </div>
                    <a href="#" className="my-auto" style={{listStyle:'None', textDecoration:'None', color:'#000000'}}> Abhishek Basnet</a>
            <NavDropdown 
                id="basic-nav-dropdown" renderMenuOnMount={true}>
                    <NavDropdown.Item href="/profile" className="pr-2">My Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/logout" className="pr-2">Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

      
                    
        </React.Fragment>
    )
}

export default Menu
