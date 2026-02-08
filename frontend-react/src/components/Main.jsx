import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>To use Bootstrap 5 in your project, include the following Content Delivery Network (CDN) links for CSS and JavaScript in your HTML file. This method is free, fast, and doesn't require downloading any files. </p>
                <Button text='Explore Now' class='btn-outline-info' url="/dashboard"/>

            </div>
        </div>
    </>
  )
}

export default Main