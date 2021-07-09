import React,{useState,useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import Hospital from '../Hospital/hospital';

const AdminRoute = (props) => {
    let {} = props; 
    return (
        <React.Fragment>
                <Switch>
                        <Route path="/hospital" component={Hospital} exact></Route>
                </Switch>
        </React.Fragment>
    )
}

export default AdminRoute
