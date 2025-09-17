import React from 'react'

import { Link } from 'react-router-dom'
import './App.css'

const Contact = () => {

  return (
    <>
   <nav className="navbar bg-warning p-0">
           <ul>
               <button className='btn btn-white m-1'><li className='nav-item mt-2'><Link to="/">Home</Link></li></button>
               <button className='btn btn-white m-1'><li className='nav-item mt-2'><Link to="/about">About</Link></li></button>
               <button className='btn btn-white m-1'><li className='nav-item mt-2'><Link to="/contact">Contact</Link></li></button>
               <button className='btn btn-white m-1'><li className='nav-item mt-2'><Link to="/items">Items</Link></li></button>
              
           </ul>
          </nav>
       <br></br>
       <br></br>

       <center>
          <h1>Contact US</h1>
          <form className='formfill'action="">
            <br />
            <input type="text" placeholder='Enter your name' required />
            <br />
            <br />
            <input type="email" placeholder='Enter your email' required />
            <br />
            <br />
            <input type="text" placeholder='Enter your message' required />
            <br />
            <br />
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
       </center>
       <br />
       <br />
       <br />
       <center>
        <h1>Our Locations</h1>
       </center>
       <br />
       <div className='sidebyside'>
    <div className="col-md-4 mb-4 m-2">
      <center>
      <div className="card h-100 shadow-sm">
         <img src='https://assets.aboutamazon.com/dims4/default/ce5ec9c/2147483647/strip/true/crop/408x230+0+0/resize/1320x744!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F30%2Fb2%2F0ded64094f14bb42db39e18dadf2%2Fsp-global-city-chennai.png'/>
        <h2>Chennai</h2>
        <p>SP Global Infocity</p>
        <a href="https://maps.app.goo.gl/ZAsahwcnfd41vNQq9" target='blank'><button style={{backgroundColor:"white"}} >Click Here</button></a>
        <br />
        </div>
        </center>
      </div>
      <div className="col-md-4 mb-4 m-2">
      <center>
      <div className="card h-100 shadow-sm">
         <img src='https://assets.aboutamazon.com/dims4/default/38b63fa/2147483647/strip/true/crop/629x355+0+261/resize/1320x744!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F02%2Ff1%2Ffa9d6ec741b08d2425fe714ee708%2Fwtc.jpg'/>
        <h2>Bangalore</h2>
        <p>WTC</p>
        <a href="https://maps.app.goo.gl/wKr5WKA5kJMLtG9eA" target='blank'><button style={{backgroundColor:"white"}} >Click Here</button></a>
        <br />
        </div>
        </center>
      </div>
      </div>
       <footer>
        <center>
        <h3 style={{margin:"20px"}}>CartToDrop</h3>
        <p style={{margin:"20px"}}>An Ecommerce Webpage done with ReactJS</p>
        <p style={{margin:"20px"}}>www.example.com</p>
        <p  >Contact us in SocialMedia</p>
        <div className=' mag col-md-6 text-md-end '>
          <i>Facebook</i>
          <i>Linkedin</i>
          <i>Instagram</i>
        </div>
        <br />
        <p style={{textAlign:"center"}}> Dial us:  +915562233554</p>
        </center>
       </footer>
    
    </>
  )
}

export default Contact