import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_dvu7k2k',
        'template_9wn919l',
        form.current,
        'OqywZKWcR_JS5_a2e',
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Restons en contact</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>oumar.diouara@hotmail.fr</h5>
            <a href="mailto:oumar.diouara@hotmail.fr" target="_blank">
              Envoyez moi un message !
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>os</h5>
            <a href="https://m.me/oumzo.septcinq" target="_blank">
              Envoyez moi un message !
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+12345678</h5>
            <a
              href="https://api.whatsapp.com/send?phone=3368931892"
              target="_blank"
            >
              Envoyez moi un message !
            </a>
          </article>
        </div>
        {/*Fin des options de contact*/}{' '}
        <form ref={form} onSubmit={sendEmail}>
          {' '}
          <input
            type="email"
            name="email"
            placeholder="Veuillez saisir votre email"
            required
          />
          <input
            type="text"
            nam="name"
            placeholder="Veuillez saisir votre nom"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            cols="30"
            rows="10"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
