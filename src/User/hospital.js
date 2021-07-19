import React,{useState,useEffect} from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';

const Hospital = (props) => {
    let{}= props
    return (
        <React.Fragment>
            <div className="container mt-1">
            
            <div class="card w-25">
                <img src="Logo.png" class="card-img-top" alt="logo" style={{height:'200px',width:'75px'}}/>
                <div class="card-body">
                    <h5 class="card-title">Hospital Name</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary ">Buy Ticket</a>
                </div>
            </div>
            </div>
            
        </React.Fragment>
    )
}

export default Hospital
