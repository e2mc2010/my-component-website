import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form>

      </form>
      <div>
        <h3>Learning Center Address</h3>
        <p>e2mc Learning Center</p>
        <p>123 Main Street</p>
        <p>City, State, ZIP</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@e2mc.com</p>
        <div>
          <iframe
            title="e2mc Learning Center"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509993!2d144.95592631531644!3d-37.81720997975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577fba8b95d1a47!2sGoogle!5e0!3m2!1sen!2sus!4v1581594018288!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
