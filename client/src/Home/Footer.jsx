import React from 'react'

const Footer = () => {
  return (
        <footer className='footer bg-black text-white' id='footer'>
    <nav className='navbar navbar-expand-lg d-flex align-items-center justify-content-center'>
            <br/>
            <ul className='d-flex p-2 ms-5 d-flex align-items-center justify-content-center'>
            <li>
              Copyright © Cinechart
              </li>
              <br/>
              <li className='ms-5'>
              Reach us at
              </li>
              <li className='col-lg-5 col-sm-2 col-xs-2'>
                <a href='https://twitter.com'>
                  <img src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png' className='col-1 ms-2 '/>
                </a>
              </li>
            </ul>
    </nav>
        </footer>
  )
}

export default Footer