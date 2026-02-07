import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [errors, seterrors] = useState({})
  const [success, setsuccess] = useState(false)
  // wait message
  const [loading, setloading] = useState(false)

  // handleregister function triggers after when the register button is clicked
  const handleregister = async (e) => {
    // no page reload or refreshed while submitting
    e.preventDefault();
    setloading(true)

     // creating userData obj
    const userData = {
      username, email, password
    }

    try{
          // the response is stored in response                  // passing url endpoint and userData
                      // await waits for the api response backend response, the next line of code will only execute after the wait
      const response = await axios.post('http://127.0.0.1:8000//api/v1/register/', userData)
      // to clear error message if its correct
      seterrors({})
      // false will become success after succfessfull registration and the success message is shown
      setsuccess(true)
    }catch(error){
      seterrors(error.response.data)
      // finally code execute in both try and catch
    }finally{
      setloading(false)
    }
  }

  return (
    <>
    <div className='container'>
      <div className='row justify-content-center' >
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className='text-light text-center mb-4'>Create An Account</h3>
          <form onSubmit={handleregister}>
                                                                                                {/* value will be stored inside the setusername */}
            <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>  {/* username will be inside the e.target.value */}
            <input type="text" className='form-control mb-3' placeholder='Username' value={username} onChange={(e)=> setusername(e.target.value)}/>
            <input type="email" className='form-control mb-3' placeholder='Email' value={email} onChange={(e)=> setemail(e.target.value)}/>
                    {/* if error                                         message */}
            <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
            <input type="password" className='form-control mb-3' placeholder='Password' value={password} onChange={(e)=> setpassword(e.target.value)}/>
            {/* if success                                     message */}
            {success && <div className='alert alert-success'>Registration Successful</div>}
               {/* if loading is true               ? represents the if statement, : represent else */}
            {loading ? (   
              <button type='submit' className='btn btn-info d-block mx-auto' disabled>Please Wait</button>
            ) : (
              <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
            )}

          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register