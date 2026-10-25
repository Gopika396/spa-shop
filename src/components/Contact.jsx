import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../images";

const emptyForm = { name: "", email: "", subject: "Treatment enquiry", message: "" };

function Contact({ cartCount }) {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Solstice contact enquiry:", form);
    setForm(emptyForm);
    setSubmitted(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sol-navbar">
        <div className="container">
          <Link className="navbar-brand sol-brand" to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={logo} alt="Solstice logo" style={{ height: 40, width: "auto" }} />
            <span>solstice<span>.</span><small style={{ display: "block" }}>SEASONAL WELLNESS</small></span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/seasons">Seasons</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/treatments">Treatments</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/contact">Contact</Link></li>
              <li className="nav-item ms-lg-3"><Link className="sol-nav-button" to="/cart">Your Cart{cartCount > 0 ? ` (${cartCount})` : ""} ↗</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="sol-page-banner">
        <div className="container" data-aos="fade-up">
          <p className="sol-label">WE'RE HERE TO HELP</p>
          <h1>Let's talk wellness.</h1>
          <p>Questions about our seasonal experiences? Send us a message.</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <p className="sol-label">GET IN TOUCH</p>
              <h2 className="sol-heading">We'd love to hear from you.</h2>
              <p className="sol-body">
                Ask us about treatment options, session durations or how to
                choose a seasonal experience that suits your preferences.
              </p>

              <div className="sol-contact-detail">
                <span>✳</span>
                <div><h3>General enquiries</h3><p>Use the contact form to tell us what you need.</p></div>
              </div>
              <div className="sol-contact-detail">
                <span>◇</span>
                <div><h3>Treatment questions</h3><p>Include the name of the experience you're interested in.</p></div>
              </div>
              <div className="sol-contact-detail">
                <span>❋</span>
                <div><h3>Comfort and suitability</h3><p>Ask about ingredients, sensitivities or treatment requirements before visiting.</p></div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <form className="sol-contact-form" onSubmit={handleSubmit}>
                <p className="sol-label">SEND AN ENQUIRY</p>
                <h2>How can we help?</h2>

                {submitted && (
                  <div className="alert alert-success" role="status">
                    Thank you! Your demo enquiry was submitted successfully.
                    No email has been sent.
                  </div>
                )}

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="contactName">Your name</label>
                    <input id="contactName" className="form-control" name="name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contactEmail">Email address</label>
                    <input id="contactEmail" className="form-control" type="email" name="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="contactSubject">Enquiry type</label>
                    <select id="contactSubject" className="form-select" name="subject" value={form.subject} onChange={handleChange}>
                      <option>Treatment enquiry</option>
                      <option>Seasonal wellness</option>
                      <option>Product and pricing question</option>
                      <option>Other enquiry</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="contactMessage">Your message</label>
                    <textarea id="contactMessage" className="form-control" rows="5" name="message" value={form.message} onChange={handleChange} required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="sol-button">Submit enquiry ↗</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="sol-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <Link to="/" className="sol-footer-brand" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <img src={logo} alt="Solstice logo" style={{ height: 34, width: "auto" }} />
                solstice.
              </Link>
              <p>Seasonal rituals. Thoughtful moments. A gentler pace.</p>
            </div>
            <div className="col-6 col-lg-3">
              <h4>Explore</h4>
              <Link to="/seasons">The seasons</Link>
              <Link to="/products">Products</Link>
              <Link to="/treatments">Treatments</Link>
            </div>
            <div className="col-6 col-lg-4">
              <h4>Get in touch</h4>
              <Link to="/about">Our philosophy</Link>
              <Link to="/contact">Contact us</Link>
              <Link to="/cart">Your cart</Link>
            </div>
          </div>
          <div className="sol-footer-bottom">
            <span>© 2026 Solstice Seasons</span>
            <span>Return to nature, return to yourself.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;