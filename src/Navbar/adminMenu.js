import React,{useState,useEffect} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import {Link,NavLink } from 'react-router-dom';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {GiTicket} from 'react-icons/gi'
import {AiOutlineFolderView} from 'react-icons/ai'
import {FaRegHospital} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {GrMail} from 'react-icons/gr'
import {AiFillSetting} from 'react-icons/ai'
import {CgLogOut} from 'react-icons/cg'
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
                <NavLink className="nav-link1" activeClassName="active"  to="#" exact> <span className='icon'><AiOutlineFolderView  /></span> Overview </NavLink>
                <NavLink className="nav-link1" activeClassName="active"  to="#"> <span><FaRegHospital /></span> Hospital </NavLink>
                <NavLink className="nav-link1" activeClassName="active"  to="#"><span><FiUsers/></span> User</NavLink>      
                <NavLink className="nav-link1" activeClassName="active"  to="#"><span><GiTicket/></span> Tickets</NavLink>      
                <NavLink className="nav-link1" activeClassName="active"  to="#"><span><GrMail/></span> Enqueries</NavLink>      
                <NavLink className="nav-link1" activeClassName="active"  to="#"><span><AiFillSetting/></span> Setting</NavLink>      
                <NavLink className="nav-link1" activeClassName="active"  to="#"><span><CgLogOut/></span> Logout</NavLink>      
            </Nav>
          </ul>
        </nav>
      </IconContext.Provider>
            </React.Fragment>
        </div>
    )
}

export default AdminMenu
