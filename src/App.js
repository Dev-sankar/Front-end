
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'animate.css/animate.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import "animate.css/animate.min.css";
import 'lightbox.js-react/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Serivce';
import service from './Components/admin/Services'
import Projects from './Pages/Projects'
import AdminHome from './Components/admin/adminHome'
import Login from './Components/Login/login'
import Register from './Components/Login/Register';
import GreenhouseForm from './Components/OrderFrom/GreenhouseOrderFrom';
import ServiceDetail from './Components/LandscapePage';
import ServiceDetailscreatefrom from './Components/admin/servicedetailscreatefrom';
import Servicecreatefrom from './Components/admin/servicescreatefrom';
import LandscapeorderForm from './Components/OrderFrom/LandscapeorderFrom';
import UserCreateForm from './Components/admin/UserCreate'

import ServiceDetailss from './Components/admin/servicedetails';
import Users from './Components/admin/UserDetails';
import OrderGreenhouse from './Components/admin/ordergreehouse';
import Dashboard from './Components/admin/adminDashboard';


import Contact from './Pages/Contact';
// import Navbar from './Components/Navbar';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
    <ToastContainer/>
    <Router>
      <Routes>

     
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin/*" element={<AdminHome/>}></Route>
        <Route path="/Service" element={<Service/>}></Route>

        <Route path="/admin/service" element={<Service/>}></Route>
        <Route path="/admin/ServiceDetailss" element={<ServiceDetailss/>}></Route>
        <Route path="/admin/Users" element={<Users/>}></Route>
        <Route path="/admin/OrderGreenhouse" element={<OrderGreenhouse/>}></Route>
        <Route path="/admin/Dashboard" element={<Dashboard/>}></Route>



        <Route path="/About/*" element={<About/>}></Route>
        <Route path="/Projects/*" element={<Projects/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/login/*" element={<Login/>}></Route>
        <Route path='/register/*' element={<Register/>}></Route>
        <Route path='/GreenhouseForm/*' element={<GreenhouseForm/>}></Route>
        <Route path='/ServiceDetail' element={<ServiceDetail/>}></Route>
        <Route path='/ServiceDetail/:name' element={<ServiceDetail/>}></Route>
        <Route path='/ServiceDetailscreatefrom' element={<ServiceDetailscreatefrom/>}></Route>
       <Route path='/Servicecreatefrom' element={<Servicecreatefrom/>}></Route>
       <Route path='/LandscapeorderForm' element={<LandscapeorderForm/>}></Route>
       <Route path='/UserCreateForm' element={<UserCreateForm/>}></Route>
       

      </Routes>
    </Router>

  
    </>
    
  );
}

export default App;
