import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Hero heading='Contact' message='Submit the form below for more work and quotes' />
      <ContactForm />
    </div>
  )
}

export default Contact