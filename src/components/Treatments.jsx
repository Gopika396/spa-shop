import React from "react";
import { Link } from "react-router-dom";
import { img, logo } from "../images";

const treatments = [
  { id: 1, title: "Hot Stone Ritual", category: "WINTER WARMTH", duration: "75 minutes", price: 2499, image: img("hot-stone.jpg"), description: "A relaxing massage experience incorporating warmed stones, subject to comfort and suitability.", includes: ["Treatment consultation", "Warm stone experience", "Quiet relaxation time"] },
  { id: 2, title: "Herbal Steam Retreat", category: "MONSOON ESCAPE", duration: "60 minutes", price: 1999, image: img("herbal-steam.jpg"), description: "An aromatic, steam-inspired spa experience in a calm setting.", includes: ["Wellness preferences check", "Herbal-inspired steam", "Relaxation time"] },
  { id: 3, title: "Bloom & Renew", category: "SPRING RITUAL", duration: "60 minutes", price: 1899, image: img("floral-ritual.jpg"), description: "A gentle floral-inspired spa experience for a fresh seasonal moment.", includes: ["Welcome consultation", "Floral-inspired body ritual", "Quiet time afterwards"] },
  { id: 4, title: "Aloe Cooling Escape", category: "SUMMER REFRESH", duration: "50 minutes", price: 1699, image: img("cooling-therapy.jpg"), description: "A refreshing aloe-inspired body-care experience.", includes: ["Product suitability check", "Cooling-inspired application", "Comfort check"] },
  { id: 5, title: "Botanical Body Polish", category: "BODY CARE", duration: "40 minutes", price: 1299, image: img("body-scrub.jpg"), description: "A body exfoliation experience using suitable botanical-inspired products.", includes: ["Skin suitability check", "Body polish experience", "Aftercare guidance"] },
  { id: 6, title: "Aromatic Escape", category: "ALL-SEASON CALM", duration: "50 minutes", price: 1799, image: img("aromatherapy.jpg"), description: "A relaxation-focused massage experience with optional aromatic oils.", includes: ["Aroma preferences check", "Relaxation session", "Post-session rest"] },
  { id: 7, title: "Relaxation Massage", category: "SLOW MOMENTS", duration: "60 minutes", price: 1999, image: img("relaxation-massage.jpg"), description: "A gentle massage experience tailored to your comfort preferences.", includes: ["Pressure preference discussion", "Relaxation massage", "Rest after treatment"] },
];

function Treatments({ addToCart, cartCount }) {
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
              <li className="nav-item"><Link className="nav-link active" to="/treatments">Treatments</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item ms-lg-3"><Link className="sol-nav-button" to="/cart">Your Cart{cartCount > 0 ? ` (${cartCount})` : ""} ↗</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="sol-page-banner">
        <div className="container" data-aos="fade-up">
          <p className="sol-label">YOUR TIME, YOUR RITUAL</p>
          <h1>Discover the experience.</h1>
          <p>Explore the details behind our nature-inspired wellness rituals.</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="sol-section-title text-center mb-5">
            <p className="sol-label">TREATMENT GUIDE</p>
            <h2 className="sol-heading">A little more about each ritual</h2>
          </div>

          {treatments.map((item, index) => (
            <article className={`sol-treatment-row ${index % 2 ? "reverse" : ""}`} key={item.id} data-aos="fade-up">
              <div className="sol-treatment-photo">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="sol-treatment-copy">
                <p className="sol-label">{item.category}</p>
                <h2 className="sol-heading">{item.title}</h2>
                <p className="sol-body">{item.description}</p>
                <p className="sol-treatment-duration">◷ {item.duration}</p>
                <h3 className="sol-treatment-price">₹{item.price.toLocaleString("en-IN")}</h3>
                <h4>What's included</h4>
                <ul>
                  {item.includes.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <button
                  className="sol-button"
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      name: item.title,
                      price: item.price,
                      duration: item.duration,
                      image: item.image,
                    })
                  }
                >
                  Add experience to cart ↗
                </button>
              </div>
            </article>
          ))}

          <p className="sol-health-note">
            These are general wellness experiences, not medical care.
            Please tell your practitioner about relevant sensitivities,
            allergies or comfort concerns before a session.
          </p>
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

export default Treatments;