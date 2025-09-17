import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from 'react-router-dom'
import './App.css'

const Home = () => {
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
      <div className="content-head">
       <center >
      <h1 >Cart TO Drop</h1>
       </center>
       </div>
       <div className='content-body'>
      
        <p>The average cart abandonment rate across all industries is a whopping 69.57% resulting in a loss of $18 Billion each year in sales revenue. Our data-driven strategies are built based on the reasons behind abandoned carts by analysing customer journey patterns, whether they are due to lengthy checkout processes or unnecessary distractions. 
          <br />
          <br />
        Our cart abandonment strategy includes behavioural analysis and tracking, email retargeting campaigns, optimized checkout process, exit-intent pop-ups or notifications, retargeting ad campaigns, personalization strategies, A/B testing and optimization, reporting and analysis and customer support integration.</p>
          <br />
        
        E-commerce refers to commercial activities including the electronic buying or selling products and services which are conducted on online platforms or over the Internet. E-commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange , inventory management systems, and automated data collection systems. E-commerce is the largest sector of the electronics industry and is in turn driven by the technological advances of the semiconductor industry.
      
       <br />
       <br />
      <br />
      <br />
      <br />
   
      <br />
      
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

export default Home
