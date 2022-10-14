import React from 'react'
import style from './ContactForm.module.css';

export default function contactForm() {
  return (
    <div id="contact" className={style.form_container}>
      <div className={style.form_elements}>
        <span className={style.span}>C'est parti !</span>
        <span className={style.span}>Collaborons dans nos projets :</span>
          <form 
          name="contact" 
          className={style.contact_form} 
          method="POST" 
          data-netlify="true" 
          >
            <input type="hidden" name="form-name" value="contact" />
            <label className={style.label} htmlFor="name">Nom: </label>
            <input className={style.input} type="text" name="name" />

            <label className={style.label}htmlFor="email">Email: </label>
            <input className={style.input} type="email" name="email" />
                  
            <label className={style.label} htmlFor="message">Message: </label>
            <textarea className={style.textarea} name="message"></textarea>

            <button className={style.button} type="submit">Envoyer</button>
          </form>
        </div>
    </div>
  )
}
