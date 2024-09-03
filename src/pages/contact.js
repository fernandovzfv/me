import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Contact</h2>
        <p>Get in touch with me</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Contact Form</h3>
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" required />
              </div>
              <div className="col-6 col-12-xsmall">
                <input type="email" name="email" id="email" placeholder="Email" required />
              </div>
              <div className="col-12">
                <textarea name="message" id="message" placeholder="Message" rows="6" required></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li><input type="submit" value="Send Message" className="primary" /></li>
                  <li><input type="reset" value="Reset" /></li>
                </ul>
              </div>
            </div>
          </form>
          <div className="warning-message" style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: '#fff3cd',
            color: '#856404',
            borderRadius: '0.25rem',
            border: '1px solid #ffeeba'
          }}>
            <strong>Note:</strong> This form is not yet implemented. please send an Email insted of (see below).
          </div>

        </div>
      </section>
    </article>
  </Layout>
);

export default ContactPage;