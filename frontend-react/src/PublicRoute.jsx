import React, { Children } from 'react'
import { useContext } from 'react'
import AuthProvider, { authcontext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
    const {isloggedin} = useContext(authcontext)
    // if not (!)
  return !isloggedin ? (
    children
  ) : (
    // if the user is logged  and trys to access login and reg page, it will redirect to '/dashboard'
    <Navigate to ='/dashboard' />
  )
}

export default PublicRoute