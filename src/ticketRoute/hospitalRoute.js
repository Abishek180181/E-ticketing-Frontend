import React,{useState,useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import IssueTickets from '../Hospitaldashboard/issueTickets'
import Ticket from '../Hospitaldashboard/ticket'
import SideBar from '../Navbar/Sidebar'
import Error from '../ProtectedRoute/error'

const HospitalRoute = (props) => {
    let {} = props
    const [inactive, setInactive] = useState(false);
    
    return (
        <React.Fragment>
            <SideBar
                onCollapse={(inactive) => {
                       
                    setInactive(inactive);
                }}
            />
            <div className={`side-content ${inactive ? 'inactive':""}`}>
                <Switch>
                    
                    <Route path='/issueTickets' component={IssueTickets} exact></Route>               
                    <Route path='/tickets' component={Ticket} exact></Route>               
                    <Route component={Error}/>   
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default HospitalRoute
