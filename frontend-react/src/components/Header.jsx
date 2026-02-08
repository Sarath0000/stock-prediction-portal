import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { authcontext } from '../AuthProvider'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  // usestate from AuthProvider component
  const {isloggedin, setisloggedin} = useContext(authcontext)
  const navigate = useNavigate();
  const handlelogout = () =>{
    // to delete the access and refresh token token
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setisloggedin(false)
    navigate('/login')
  }
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>

        <div>
          {isloggedin ?(
            <>
            <Button text='Dashboard' class='btn-info' url="/dashboard"/>
            &nbsp;
            <button className='btn btn-danger' onClick={handlelogout}>Logout</button>
            </>
          ) : (
            <>
            {/* props name (class) */}
            <Button text='Login' class='btn-outline-info' url="login"/>        
            &nbsp;
            <Button text='Register' class='btn-info' url="register"/>
            </>
          )}
        </div>
    </nav>
    </>
  )
}

export default Header