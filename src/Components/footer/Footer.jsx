import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { FiInstagram } from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        EGATOR
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact ">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook">
          <FaFacebook />
        </a>
        <a href="https://instagram">
          <IoLogoTwitter />
        </a>
        <a href="https://twitter.com">
          {' '}
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Oumar Diouara tous droits réservés</small>
      </div>
    </footer>
  )
}

export default Footer
