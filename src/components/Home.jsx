import React from "react";
import { Link } from "react-router-dom";
import { img, logo } from "../images";

const seasons = [
  { name: "Winter", text: "Warmth, stones and comforting rituals.", image: img("winter.jpg") },
  { name: "Spring", text: "Floral renewal and fresh beginnings.", image: img("spring.jpg") },
  { name: "Summer", text: "Cooling experiences for warmer days.", image: img("summer.jpg") },
  { name: "Monsoon", text: "Herbal rituals and slower moments.", image: img("monsoon.jpg") },
];

function Home({ cartCount }) {
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
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/seasons">Seasons</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/treatments">Treatments</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item ms-lg-3"><Link className="sol-nav-button" to="/cart">Your Cart{cartCount > 0 ? ` (${cartCount})` : ""} ↗</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section className="sol-hero">
          <img
            className="sol-hero-bg"
            src={img("hero.jpg")}
            alt="Peaceful nature-inspired wellness retreat"
          />
          <div className="sol-hero-shade"></div>

          <div className="container sol-hero-content">
            <p className="sol-eyebrow" data-aos="fade-up">WELLNESS IN EVERY SEASON</p>
            <h1 data-aos="fade-up" data-aos-delay="100">
              Let nature
              <br />
              set your pace.
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Discover seasonal spa rituals designed to bring warmth,
              freshness and a little more calm into your everyday life.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/seasons" className="sol-button">Explore the seasons ↗</Link>
              <Link to="/products" className="sol-button-outline">View our collection</Link>
            </div>
          </div>

          <span className="sol-hero-caption">NATURE-INSPIRED · THOUGHTFULLY CURATED</span>
        </section>

        <section className="sol-intro section-space">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-5" data-aos="fade-right">
                <p className="sol-label">A DIFFERENT KIND OF ESCAPE</p>
                <h2 className="sol-heading">Every season has its own kind of calm.</h2>
              </div>
              <div className="col-lg-6 offset-lg-1" data-aos="fade-left">
                <p className="sol-body">
                  We bring together nature-inspired experiences for
                  changing seasons. From warming winter rituals to
                  refreshing summer treatments, discover an experience
                  that fits the moment.
                </p>
                <Link to="/about" className="sol-text-link">Discover our philosophy ↗</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="sol-season-section section-space">
          <div className="container">
            <div className="sol-section-title text-center" data-aos="fade-up">
              <p className="sol-label">THE SEASONAL EDIT</p>
              <h2 className="sol-heading">Inspired by nature</h2>
              <p>Four seasons. Four ways to slow down.</p>
            </div>

            <div className="row g-4">
              {seasons.map((season, index) => (
                <div
                  className="col-6 col-lg-3"
                  key={season.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Link to={`/seasons#${season.name.toLowerCase()}`} className="sol-season-card">
                    <img src={season.image} alt={season.name} />
                    <div className="sol-season-overlay">
                      <h3>{season.name}</h3>
                      <p>{season.text}</p>
                      <span>Explore ↗</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link to="/seasons" className="sol-button">Explore all seasons ↗</Link>
            </div>
          </div>
        </section>

        <section className="sol-signature section-space">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="sol-signature-image">
                  <img src={img("hot-stone.jpg")} alt="Hot stone wellness ritual" />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1" data-aos="fade-left">
                <p className="sol-label">WINTER SIGNATURE</p>
                <h2 className="sol-heading">The warmth of a slower moment.</h2>
                <p className="sol-body">
                  Explore our Himalayan hot-stone-inspired relaxation
                  experience, created for a comforting and peaceful spa visit.
                </p>
                <p className="sol-price">₹2,499 <span>/ 75 minutes</span></p>
                <Link to="/products" className="sol-button">Discover treatments ↗</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="sol-promise section-space">
          <div className="container">
            <div className="row g-4 text-center">
              <div className="col-md-4" data-aos="fade-up">
                <span className="sol-promise-icon">✳</span>
                <h3>Inspired by nature</h3>
                <p>Seasonal experiences with thoughtful details.</p>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <span className="sol-promise-icon">◇</span>
                <h3>Room to unwind</h3>
                <p>Make time for a slower, more peaceful moment.</p>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <span className="sol-promise-icon">❋</span>
                <h3>Choose your ritual</h3>
                <p>Find a treatment that suits your preferences.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

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

export default Home;