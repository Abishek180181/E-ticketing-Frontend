import React, { useState,useEffect } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/merocare.png'
import './navbar2.css'

const AdminSideBar = (props) => {
  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    if (inactive) {
      // removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const logOut = (e)=>{
      sessionStorage.clear();
      window.location.href = "/"
  }

  return (
    <>
      
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
              <div className="top-section">
                <div className="logo">
                  <img src={logo} alt="merocare" />
                </div>
                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                  {inactive ? (
                    <i class="bi bi-arrow-right-square-fill " ></i>
                    
                  ) : (
                    <i class="bi bi-arrow-left-square-fill" style={{ color: "white" }}></i>
                  
                  )}
                </div>
              </div>
              <div className="divider mt-2"></div>
           <div className="main-menu">
           
             <Navbar classname="pl-5">
               <Nav>
                 <NavLink to="/overview" activeClassName="active1" className="nav-link navv2" exact><span className="menu-icon"><i class="fas fa-tachometer-alt"></i></span><span className="dashboard">Overview</span></NavLink>
                 <NavLink className="nav-link navv2" to="/hospital" activeClassName="active1"><span className="menu-icon"><i class="fas fa-hospital"></i></span><span className="dashboard">Hospitals</span></NavLink>
                 <NavLink to="/users" className="nav-link navv2" activeClassName="active1"><span className="menu-icon" activeClassName="active"><i class="fas fa-users"></i></span><span className="dashboard">Users</span></NavLink>
                 <NavLink to="/tickets" className="nav-link navv2" activeClassName="active1"><span className="menu-icon ticket" activeClassName="active"><i class="fas fa-ticket-alt"></i></span><span className="dashboard">Tickets</span></NavLink>
                 <NavLink to="/enquiries" className="nav-link navv2" activeClassName="active1"><span className="menu-icon" activeClassName="active"><i class="fas fa-envelope"></i></span><span className="dashboard">Enquiries</span></NavLink>
                 <NavLink to="/settings" className="nav-link navv2" activeClassName="active1"><span className="menu-icon" activeClassName="active"><i class="fas fa-user-cog"></i></span><span className="dashboard">Settings</span></NavLink>
                 <NavLink to="/logout"  className="nav-link navv2" activeClassName="active1" onClick={(event)=>{logOut(event)}}><span className="menu-icon" activeClassName="active"><i class="fas fa-sign-out-alt"></i></span><span className="dashboard">Logout</span></NavLink>

               </Nav>
             </Navbar>
           </div>
            </div>
    </>
  )
}

export default AdminSideBar
