//import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter} from 'react-router-dom'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import TicketRoute from './ticketRoute/ticketRoute';
import Menu from './Header/menu.js';
import AdminRoute from './ticketRoute/adminRoute'
import HospitalRoute from './ticketRoute/hospitalRoute';





function App() {
  //variable initialization
  let token = sessionStorage.getItem('token');
  let user = JSON.parse(sessionStorage.getItem('user'));

  //functions goes here
  const loadNavBar = ()=>{
    
    if(token != null)
    {
      if(user.userType == "Admin")
      {
        return  (
            
            <>  
           
              <AdminRoute/>
            </>
          )
      }
      else if(user.userType == "Hospital")
      {
        return (
          <> 
            <HospitalRoute/>
          </>
        )
      }
      else
      {
        return  (
           <>
            <Menu/>
            <TicketRoute/>
            </>
          )
        
      }
    }
    else if(token == null)
    {
      return  (
        <>
         <Menu/>
         <TicketRoute/>
         </>
       )
    }
  }

  return (
    <>
    <ToastProvider placement='top-center'>
      <BrowserRouter>
          {
            loadNavBar()
          }
        

      </BrowserRouter>
      </ToastProvider>
    </>
  );
}

export default App;
