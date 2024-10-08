import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        alert('Message sent successfully!');
        window.location.reload(); // Refresh the page after successful submission
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    }).catch(error => {
      alert('Oops! There was a problem submitting your form.');
    });
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contact</h2>
        <form id="contactForm" action="https://formspree.io/f/mwpekoaw" method="POST" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
