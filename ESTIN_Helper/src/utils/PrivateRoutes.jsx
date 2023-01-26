import React,{ useContext }  from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'

const PrivateRoutes = () => {
    console.log('Private route works')
    let {user} = useContext(AuthContext)
    return(
        user ? <Navigate to="/Home" /> : <Outlet/> 
    )
}

export default PrivateRoutes