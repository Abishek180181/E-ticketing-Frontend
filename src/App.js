import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter} from 'react-router-dom'
import { ToastProvider, useToasts } from 'react-toast-notifications';


function App() {
  return (
    <>
    <ToastProvider placement='top-center'>
      <BrowserRouter>

      </BrowserRouter>
      </ToastProvider>
    </>
  );
}

export default App;
