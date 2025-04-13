import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <div className='outer-container'>
        <div className="red">
          <img src="./images/Logo.png" alt="" />
          <div>
            <h1>Contact us</h1>
            <p>Kolkata West Bengal,700001</p>
            <p>9007750066</p>
            <p>contact@agriassure.com</p>
          </div>
        </div>

        <div className="red">
          <img src="./images/Logo.png" alt="" />
        </div>
        <div className="red">
          <h1>Features</h1>
          <p>AI-Powered Crop Prediction</p>
          <p>AI Chatbot</p>
        </div>
        <div className="red">
          <h1>Social Media</h1>
          <h1>Subscribe Now!</h1>
          <input type="email" />
          <div><button>Subscribe</button></div>
          
        </div>
      </div>
    </>
  )
}

export default Footer
