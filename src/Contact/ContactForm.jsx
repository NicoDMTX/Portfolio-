import React from 'react'
import './ContactForm.css';

export default function contactForm() {
  return (
    <div className="form_container">
      <span>C'est parti !</span>
      <span>Collaborons dans nos projets :</span>
        <form 
        name="contact" 
        className="contact_form" 
        method="POST" 
        data-netlify="true" 

        >
          <input type="hidden" name="form-name" value="contact" />
          <label for="name">Nom: </label>
          <input type="text" name="name" />

          <label for="email">Email: </label>
          <input type="email" name="email" />
                
          <label for="message">Message: </label>
          <textarea name="message"></textarea>

          <button type="submit">Envoyer</button>
        </form>
    </div>
  )
}
