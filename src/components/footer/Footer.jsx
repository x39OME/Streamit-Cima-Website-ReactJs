import React from "react"
import { homeData } from "../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>© 2024 - STREAMIT CIMA. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
          </div>
          <div className='box'>
            <h3>Follow Us</h3>
            <i className='fab fa-snapchat'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
          </div>
          <div className='box'>
            <h3>Streamit App</h3>
            <div className='img'>
            <span>App Store</span>
              <img src='./images/appstore.png' alt="app store" />
              <span>Google Play</span>
              <img src='./images/googleplay.png' alt="google play" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
