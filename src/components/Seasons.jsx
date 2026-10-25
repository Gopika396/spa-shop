import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { img, logo } from "../images";

const seasonalData = [
  {
    id: "winter",
    productId: 1,
    name: "Winter",
    subtitle: "Warmth for colder days",
    image: img("winter.jpg"),
    title: "Himalayan Hot Stone",
    treatmentImage: img("hot-stone.jpg"),
    description: "A warming stone-inspired relaxation experience.",
    price: 2499,
    duration: "75 min",
  },
  {
    id: "spring",
    productId: 3,
    name: "Spring",
    subtitle: "Fresh beginnings",
    image: img("spring.jpg"),
    title: "Bloom & Renew",
    treatmentImage: img("floral-ritual.jpg"),
    description: "A floral-inspired ritual for a fresh seasonal feeling.",
    price: 1899,
    duration: "60 min",
  },
  {
    id: "summer",
    productId: 4,
    name: "Summer",
    subtitle: "Cool down naturally",
    image: img("summer.jpg"),
    title: "Aloe Cooling Escape",
    treatmentImage: img("cooling-therapy.jpg"),
    description: "A refreshing aloe-inspired body-care experience.",
    price: 1699,
    duration: "50 min",
  },
  {
    id: "monsoon",
    productId: 2,
    name: "Monsoon",
    subtitle: "Slow down and unwind",
    image: img("monsoon.jpg"),
    title: "Herbal Steam Retreat",
    treatmentImage: img("herbal-steam.jpg"),
    description: "A soothing herbal-inspired steam and relaxation ritual.",
    price: 1999,
    duration: "60 min",
  },
];

function Seasons({ addToCart, cartCount }) {
  const { hash } = useLocation();
  const [selected, setSelected] = useState("winter");

  // Open the season from links like /seasons#spring
  useEffect(() => {
    const id = hash.replace("#", "");
    if (seasonalData.some((s) => s.id === id)) setSelected(id);
  }, [hash]);

  const season = seasonalData.find((item) => item.id === selected);

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
              <li className="nav-item"><Link className="nav-link active" to="/seasons">Seasons</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/treatments">Treatments</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item ms-lg-3"><Link className="sol-nav-button" to="/cart">Your Cart{cartCount > 0 ? ` (${cartCount})` : ""} ↗</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="sol-page-banner">
        <div className="container" data-aos="fade-up">
          <p className="sol-label">FOUR SEASONS, FOUR RITUALS</p>
          <h1>Choose your season.</h1>
          <p>Discover a wellness experience inspired by the world outside.</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="row g-3 mb-5">
            {seasonalData.map((item, index) => (
              <div className="col-6 col-lg-3" key={item.id} data-aos="fade-up" data-aos-delay={index * 80}>
                <button
                  id={item.id}
                  className={`sol-season-selector ${selected === item.id ? "active" : ""}`}
                  onClick={() => setSelected(item.id)}
                  aria-pressed={selected === item.id}
                >
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                  <small>{item.subtitle}</small>
                </button>
              </div>
            ))}
          </div>

          <div className="sol-season-feature">
            <div className="row align-items-center g-0">
              <div className="col-lg-6">
                <img src={season.treatmentImage} alt={season.title} />
              </div>
              <div className="col-lg-6 sol-season-feature-copy">
                <p className="sol-label">{season.name.toUpperCase()} COLLECTION</p>
                <h2 className="sol-heading">{season.title}</h2>
                <p className="sol-body">{season.description}</p>
                <p className="sol-price">
                  ₹{season.price.toLocaleString("en-IN")} <span>/ per session</span>
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <button
                    className="sol-button"
                    onClick={() =>
                      addToCart({
                        id: season.productId,
                        name: season.title,
                        price: season.price,
                        duration: season.duration,
                        image: season.treatmentImage,
                      })
                    }
                  >
                    Add to cart ↗
                  </button>
                  <Link to="/products" className="sol-button-outline">Explore the catalogue</Link>
                </div>
              </div>
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

export default Seasons;