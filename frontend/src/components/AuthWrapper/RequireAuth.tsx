import React from 'react'
import { Outlet, Navigate, } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const RequireAuth: React.FC = () =>{

    const { user } = useAuth()
    return  user ? <Outlet /> : <Navigate to="/login" state={{id:1, message:"You have to login to access this feature"}}/>
}

export default RequireAuth