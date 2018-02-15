import React from 'react'

import './index.css'
import listIcon from '../../images/list-icon-cart.png'

const LandingPage = () =>
  <section className='landing-page-container'>
    <header className='landing-page-header'>
      <h1 className='landing-page-title'>
        Smart Cart App
      </h1>
      <span>Sign In using the arrow icon above</span>
    </header>
    <section className='landing-page-shoutout'>
      <h2 className='landing-page-shoutout-title'>
        Smart Cart can help you:
      </h2>
      <ul className='landing-page-shoutout-list'>
        <li className='landing-page-shoutout-list-item'>
          <img alt='cart icon' src={listIcon} />
          <p style={{paddingLeft: '.7em'}}>Keep data safe on mobile</p>
        </li>
        <li className='landing-page-shoutout-list-item'>
          <img alt='cart icon' src={listIcon} />
          <p>Web browse on any device</p>
        </li>
        <li className='landing-page-shoutout-list-item'>
          <img alt='cart icon' src={listIcon} />
          <p>Manage all shopping items</p>
        </li>
        <li className='landing-page-shoutout-list-item'>
          <img alt='cart icon' src={listIcon} />
          <p>Access shopping data 24/7</p>
        </li>
      </ul>
    </section>
  </section>

export default LandingPage
