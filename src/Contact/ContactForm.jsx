import React from 'react'
import './ContactForm.css';

export default function contactForm() {
  return (
    <div className="form_container">
        <form name="contact" method="POST" data-netlify="true">
                <label>Your Name: <input type="text" name="name" /></label>
                <label>Your Email: <input type="email" name="email" /></label>
                <label>Message: <textarea name="message"></textarea></label>
                <button type="submit">Send</button>
        </form>
    </div>
  )
}
