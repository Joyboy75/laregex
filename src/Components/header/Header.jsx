import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello je suis </h5>
        <h1>Oumar Diouara</h1>
        <h5 className="text-light">Fullstack Développeur</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          {' '}
          Défiler vers le bas{' '}
        </a>
      </div>
    </header>
  )
}

export default Header
