import React, { Children } from 'react'
import { useContext } from 'react'
import AuthProvider, { authcontext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({Children}) => {
    // getting isloggedin fron authcontext that is inside src.AuthProvider 
    const {isloggedin} = useContext(authcontext)
  return isloggedin ?(
    Children
  ) : (
    // if the user is not logged in while trying to access using manual typing of url path , will redirect to '/login' page
    <Navigate to='/login' />
  )
}


export default PrivateRoute