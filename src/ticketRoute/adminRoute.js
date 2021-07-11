import React,{useState,useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import Hospital from '../Hospital/hospital';
import AdminSideBar from '../Navbar/adminSidebar';



const AdminRoute = (props) => {
    let {} = props; 
    const [inactive, setInactive] = useState(false);
    return (
        <React.Fragment>

                <AdminSideBar
                     onCollapse={(inactive) => {
                       
                        setInactive(inactive);
                    }}
                />

                <div className={`side-content ${inactive ? 'inactive':""}`}>
                    <Switch>
                  
                            <Route path="/hospital" component={Hospital} exact></Route>
                    </Switch>
                </div>
        </React.Fragment>
    )
}

export default AdminRoute
