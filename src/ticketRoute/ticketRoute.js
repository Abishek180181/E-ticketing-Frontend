import React,{useState,useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../Home/home'
import Login from '../Registration/login'




const TicketRoute = (props) => {
    let {}=props
    
    return (
        <React.Fragment>
            <Switch>
                <Route path='/' component={Home} exact></Route>
                <Route path='/login' component={Login} exact></Route>
                
              
                
            </Switch>
        </React.Fragment>
    )
}

export default TicketRoute
