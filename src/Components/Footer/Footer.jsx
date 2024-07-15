import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-logo-add">
            <p><span>SA</span>Fashion</p>
            <p className="address">Address: Building No. - 0, Koilari Bhanjanpur, <div>Koilari, Bharatgamj, Prayagraj,</div> <div>Uttar Pradesh, 212104</div></p>
            <p className="phone">Phone: +919236581795</p>
            <p className="mail">sitesafashion@gmail.com</p>
        </div>
        <ul className="footer-links">
            <h3>Useful Links</h3>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Services</li>
            <li>Return Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer