import React,{useState,useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import Hospital from '../Hospital/hospital';
import SideBar from '../Navbar/Sidebar';
import Overview from '../Hospital/overview';
import Error from '../ProtectedRoute/error'



const AdminRoute = (props) => {
    let {} = props; 
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
                  
                            <Route path="/hospital" component={Hospital} exact></Route>
                            <Route path="/overview" component={Overview} exact></Route>
                            <Route component={Error}/>       
                    </Switch>
                </div>
        </React.Fragment>
    )
}

export default AdminRoute
