import React,{useState,useEffect} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import {Link,NavLink } from 'react-router-dom';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {GiTicket} from 'react-icons/gi'
import './navbar.css'


const AdminMenu = (props) => {
        let{}=props
        const [sidebar, setSidebar] = useState(false);
        const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <React.Fragment>
            <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <Nav className="ms-auto nav-text">
                <NavLink className="nav-link" activeClassName="active"  to="/" exact> <span><GiTicket/></span> Home </NavLink>
                <NavLink className="nav-link" activeClassName="active"  to="/about"> <span><GiTicket/></span> About </NavLink>
                <NavLink className="nav-link" activeClassName="active"  to="/contact"><span><GiTicket/></span> Contact</NavLink>      
            </Nav>
          </ul>
        </nav>
      </IconContext.Provider>
            </React.Fragment>
        </div>
    )
}

export default AdminMenu
