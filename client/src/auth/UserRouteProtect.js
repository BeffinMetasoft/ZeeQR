import React from "react";
import {Outlet,Navigate} from 'react-router-dom'

 const UserRouteProtect =(company)=>{
    
    let auth = {'token':localStorage.getItem('refTokenZeeqrInfo')}
    return(
        
        auth.token ? <Outlet/> : <Navigate to={"/login"} />
       
    )
 }
 export default UserRouteProtect