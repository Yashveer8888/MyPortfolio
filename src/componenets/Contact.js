import React from 'react'

export default function Contact() {
  return (
    <div>
      <div class="container">
            <div class="section-header">
                <h2>Get in Touch</h2>
            </div>
            <div class="contact-form fade-in">
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}
