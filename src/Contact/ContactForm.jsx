import React from 'react'
import style from './ContactForm.module.css';
import {useForm} from 'react-hook-form';

const wait = (duration = 1000) => {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration)
  })
}

export default function contactForm() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {register, handleSubmit, formState } = useForm();
  const {isSubmitting} = formState

  const onSubmit = async data => {
    await wait(2000)
    console.log(data)
  }

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
          onSubmit={handleSubmit(onSubmit)}
          >
            <input type="hidden" name="form-name" value="contact" />
            <label className={style.label} htmlFor="name">Nom: </label>
            <input className={`${style.input} is-invalid`} type="text" name="name" {...register('Vous devez entrez un pseudo', {required: true})}/>
            <span className="invalid-feedback">eazdzaeza</span>

            <label className={style.label} htmlFor="email">Email: </label>
            <input className={style.input} type="email" name="email" {...register('email')} />
                  
            <label className={style.label} htmlFor="message">Message: </label>
            <textarea className={style.textarea} name="message"></textarea>

            <button disabled={isSubmitting} className={style.button} type="submit">Envoyer</button>
          </form>
        </div>
    </div>
  )
}
