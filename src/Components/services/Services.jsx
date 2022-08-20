import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

export const Services = () => {
  return (
    <section id="services">
      <h5>Ce que je propose</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI / UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI  UX */}

        <article className="service">
          <div className="service__head">
            <h3>DEVELOPMENT WEB</h3>
          </div>

          <ul className="service__list">
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}

        <article className="service">
          <div className="service__head">
            <h3>CREATION DE CONTENU</h3>
          </div>

          <ul className="service__list">
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              {' '}
              <BiCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CREATION DE COONTENU */}
      </div>
    </section>
  )
}

export default Services
