import React from "react";
import { Link } from "react-router-dom";
import { img, logo } from "../images";

function About({ cartCount }) {
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
              <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item ms-lg-3"><Link className="sol-nav-button" to="/cart">Your Cart{cartCount > 0 ? ` (${cartCount})` : ""} ↗</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="sol-page-banner">
        <div className="container" data-aos="fade-up">
          <p className="sol-label">OUR PHILOSOPHY</p>
          <h1>Rooted in nature. Made for your moment.</h1>
          <p>A thoughtful approach to seasonal spa and wellness experiences.</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img className="sol-about-image" src={img("hero.jpg")} alt="A peaceful nature-inspired spa interior" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <p className="sol-label">THE STORY OF SOLSTICE</p>
              <h2 className="sol-heading">Wellness doesn't have to be complicated.</h2>
              <p className="sol-body">
                Solstice Seasons is a concept built around a simple idea:
                different times of year invite different ways of slowing down.
                Our collection brings together warming, refreshing, floral
                and herbal-inspired spa experiences.
              </p>
              <p className="sol-body">
                We believe a wellness visit should feel considered, welcoming
                and personal. Choose the season you love, explore the rituals
                that interest you and make space for a moment of calm.
              </p>
              <Link to="/seasons" className="sol-button">Discover our seasons ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-promise section-space">
        <div className="container">
          <div className="sol-section-title text-center mb-5">
            <p className="sol-label">WHAT MATTERS TO US</p>
            <h2 className="sol-heading">Our guiding principles</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="sol-value-card">
                <span>01</span>
                <h3>Thoughtful experiences</h3>
                <p>Every ritual is presented with clear descriptions and attention to comfort.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="sol-value-card">
                <span>02</span>
                <h3>Nature-inspired</h3>
                <p>Our themes draw inspiration from the colours, moods and textures of each season.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="sol-value-card">
                <span>03</span>
                <h3>Your comfort first</h3>
                <p>Personal preferences and suitability should always be considered before a treatment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-about-cta">
        <div className="container text-center" data-aos="zoom-in">
          <p className="sol-label">YOUR NEXT MOMENT STARTS HERE</p>
          <h2 className="sol-heading">Find a ritual that feels right.</h2>
          <Link to="/products" className="sol-button">Explore the collection ↗</Link>
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

export default About;