import React,{useState,useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../Home/home'
import Login from '../Registration/login'
import AdminDashboard from '../Dashboard/adminDashboard'
import Hospital from '../Hospital/hospital'



const TicketRoute = (props) => {
    let {}=props
    
    return (
        <React.Fragment>
            <Switch>
                <Route path='/' component={Home} exact></Route>
                <Route path='/login' component={Login} exact></Route>
                <Route path='/admin' component={AdminDashboard} exact></Route>
                <Route path='/hospital' component={Hospital} exact></Route>
                
            </Switch>
        </React.Fragment>
    )
}

export default TicketRoute
