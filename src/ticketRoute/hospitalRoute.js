import React,{useState,useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import Ticket from '../Hospitaldashboard/ticket'





const HospitalRoute = (props) => {
    let {}=props
    
    return (
        <React.Fragment>
            <Switch>
                <Route path='/ticket' component={Ticket} exact></Route>
                
                
              
                
            </Switch>
        </React.Fragment>
    )
}

export default HospitalRoute
