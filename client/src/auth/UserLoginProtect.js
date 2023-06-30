import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const UserLoginProtect=()=> {
    let auth = {'token':localStorage.getItem('refTokenZeeqrInfo')}
    return(
        !auth.token ? <Outlet/> : <Navigate to={"/home"} />
       
    )
}

export default UserLoginProtect