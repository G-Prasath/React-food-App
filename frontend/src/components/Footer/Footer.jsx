import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="Logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quis ab. Earum consequatur quisquam vero velit accusamus culpa commodi exercitationem.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="Facebook" />
                    <img src={assets.twitter_icon} alt="Twitter" />
                    <img src={assets.linkedin_icon} alt="LinkedIn" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>admin@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyrights'>Copyrights 2024 @ Tomoto.com - All Rights Reserved</p>
    </div>
  )
}
