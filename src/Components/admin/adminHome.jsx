import React, {Fragment} from 'react';
import { Routes, Route} from 'react-router-dom';
import AdminNavbar from './adminNavber'
import Users from './UserDetails'
import Dashboard from './adminDashboard'


import Serivce from './Services';
import ServiceDetailss from './servicedetails'
import OrderGreenhouse from './ordergreehouse'
import OrderLandScape from './orderlandscape';


function AdminHome(){
    return(
        <Fragment>
            
            <AdminNavbar></AdminNavbar>
            <Routes>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
       
        <Route path="/Serivce" element={<Serivce/>}/>
        <Route path="/ServiceDetailss" element={<ServiceDetailss/>}/>
        <Route path='/OrderGreenhouse' element={<OrderGreenhouse/>}></Route>
        <Route path='/OrderLandScape'  element={<OrderLandScape/>}></Route>
       
      


      </Routes>

      

        </Fragment>
    )
}

export default  AdminHome;