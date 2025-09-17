import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'

const About = () => {
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

       <br />
       <br />
       <center>
       <h1>About US</h1></center>
      <div className="about-container">
      <div className="content-box">
      
      <p>
        Welcome to CartDrop, your number one source for all things e-commerce. We're dedicated to providing you the very best of online shopping experience, 
        <br />with an emphasis on customer satisfaction, quality products, and seamless service.
      <br />
        Founded in 2023, CartDrop has come a long way from its beginnings. 
        <br />
        When we first started out, our passion for helping customers find the best deals online drove us to start our own business.
        <br />
       you enjoy our products as much as we enjoy offering them to you. 
       <br />
       If you have any questions or comments, please don't hesitate to contact us.
       <br />
        <br />
        Sincerely,
        <br />
        The CartTODrop Team
      </p>
    </div>
    
    <div className="image-box">
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.am-5njKzSXis0hH9b1f4BAHaE7?pid=Api&P=0&h=180" 
        alt="About"
        className="about-image"
      />
    </div>
  </div>
       <center>
        <h1>Our Inspiration</h1>
        <br />
       </center>
       <div className='sidebyside'>
    <div className="col-md-4 mb-4 m-2">
      <center>
      <div className="card h-100 shadow-sm">
         <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/befunky-collage-61jpg-015457-16x9.jpg?VersionId=d90xAaA8MIMo2ysMy.VWQPp9dG4H3p2I&size=690:388'/>
        <h2>SatyaDev Nadella</h2>
        <p>Ceo of Microsoft</p>
        </div>
        </center>
      </div>
      <div className="col-md-4 mb-4 m-2">
      <center>
      <div className="card h-100 shadow-sm">
         <img src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202502/67a7345deb35d-perplexity-ai-ceo-challenges-iits-to-unlock-pro-access-campus-wide-in-2-week-event-083920393-16x9.jpg?size=948:533'/>
        <h2>Aravind Srinivas</h2>
        <p>Ceo of Perplexity AI</p>
        </div>
        </center>
      </div>
      </div>
       
       <br />
    
       
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

export default About