import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { Provider } from 'react-redux'
import {store} from './app/Store.jsx'
  import { ToastContainer, toast } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>
    <AppRoutes />
    <ToastContainer/>
    </Provider>
    </StrictMode>
 
)
