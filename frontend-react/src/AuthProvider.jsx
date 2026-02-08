import React, { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'


// create context
const authcontext = createContext();

function AuthProvider({children}) {
    const [isloggedin, setisloggedin] = useState(
        // !! is used to convert that line to true or false value, if access token is present it become true else false
        !!localStorage.getItem('accessToken')
    )
  return (
    <authcontext.Provider value={{isloggedin, setisloggedin}}>
        {children}
    </authcontext.Provider>
  )
}

export default AuthProvider
export {authcontext}