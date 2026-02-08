import axios from 'axios'
import React, { useEffect } from 'react'
import axiosinstance from '../../axiosinstance'



const Dashboard = () => {
    useEffect(()=> {
        const fetchProtectedData = async () => {
            try{
                                // passing token(authorization header) and with the path
              const response = await axiosinstance.get('/protected-view/');
              
            }catch(error){

            }
        }
        fetchProtectedData();
    }, [])

  return (
    <div className='text-light'>Dashboard</div>
  )
}

export default Dashboard