import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter} from 'react-router-dom'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import TicketRoute from './ticketRoute/ticketRoute';
import Menu from './Header/menu.js';
import AdminMenu from './Navbar/adminMenu';


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
        <AdminMenu/>
      }
      else
      {
        return <Menu/>
      }
    }
    else if(token == null)
    {
      return <Menu/>
    }
  }

  return (
    <>
    <ToastProvider placement='top-center'>
      <BrowserRouter>
          {
            loadNavBar()
          }
          <TicketRoute/>

      </BrowserRouter>
      </ToastProvider>
    </>
  );
}

export default App;
