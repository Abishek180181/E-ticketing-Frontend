import React,{useState,useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../Home/home'
import Login from '../Registration/login'
import Hospital from '../User/hospital'
import Buyticket from '../User/buyticket'
import Self from '../User/self'
import Other from '../User/other'
import Ticketdetail from '../User/ticketdetail'




const TicketRoute = (props) => {
    let {}=props
    
    return (
        <React.Fragment>
            <Switch>
                <Route path='/' component={Home} exact></Route>
                <Route path='/login' component={Login} exact></Route>
                <Route path='/hospitals' component={Hospital} exact></Route>
                <Route path='/buyticket/:hospitalId' component={Buyticket} exact></Route>                            
                <Route path='/ticketdetail' component={Ticketdetail} exact></Route>               

            </Switch>
        </React.Fragment>
    )
}

export default TicketRoute
