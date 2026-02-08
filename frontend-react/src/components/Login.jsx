import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import AuthProvider, { authcontext } from '../AuthProvider'
import { useContext } from 'react'


const Login = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')
  // wait message
  const [loading, setloading] = useState(false)
  // redireting or navigating to home page
  const navigate = useNavigate()
  // usestate from AuthProvider component
  const {isloggedin, setisloggedin} = useContext(authcontext)


  const handlelogin = async (e) => {
    e.preventDefault();
    setloading(true);

    const userdata = {
      username, password
    }

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userdata)
      // storing access and refresh token inside localStorage
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      setisloggedin(true)
      // after login navigate to home page
      navigate('/')
    }catch(error){
      seterror('Invalid Details')
    }finally{
      setloading(false)
    }

  }

  return (
    <>
    <div className='container'>
      <div className='row justify-content-center' >
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className='text-light text-center mb-4'>Login</h3>
          <form onSubmit={handlelogin}>
            <input type="text" className='form-control mb-3' placeholder='Username' value={username} onChange={(e)=> setusername(e.target.value)}/>
            <input type="password" className='form-control mb-3' placeholder='Password' value={password} onChange={(e)=> setpassword(e.target.value)}/>

            {error && <div className='text-danger'>{error}</div>}
               {/* if loading is true               ? represents the if statement, : represent else */}
            {loading ? (   
              <button type='submit' className='btn btn-info d-block mx-auto' disabled>Please Wait</button>
            ) : (
              <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
            )}
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login