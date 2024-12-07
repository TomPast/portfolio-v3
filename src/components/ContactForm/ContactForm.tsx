import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

import './ContactForm.scss'

function ContactForm({ className }: { className?: string }) {
  const [state, handleSubmit] = useForm('xyzyyyew')
  if (state.succeeded) {
    return <p>Message sent!</p>
  }
  return (
    <form onSubmit={handleSubmit} className={`contact-form ${className}`}>
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input id="name" type="text" name="name" placeholder="Name" />

      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input id="email" type="email" name="email" placeholder="Email" />

      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Message" rows={8} />
      <button type="submit" disabled={state.submitting} className="submit-btn">
        Send →
      </button>
    </form>
  )
}

export default ContactForm
