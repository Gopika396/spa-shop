import React from "react";
import { Link } from "react-router-dom";
import { img, logo } from "../images";

const products = [
  { id: 1, name: "Himalayan Hot Stone", season: "WINTER", price: 2499, duration: "75 min", image: img("hot-stone.jpg"), description: "A warming, stone-inspired relaxation ritual." },
  { id: 2, name: "Herbal Steam Retreat", season: "MONSOON", price: 1999, duration: "60 min", image: img("herbal-steam.jpg"), description: "An aromatic herbal steam and relaxation experience." },
  { id: 3, name: "Bloom & Renew", season: "SPRING", price: 1899, duration: "60 min", image: img("floral-ritual.jpg"), description: "A gentle floral-inspired spa ritual." },
  { id: 4, name: "Aloe Cooling Escape", season: "SUMMER", price: 1699, duration: "50 min", image: img("cooling-therapy.jpg"), description: "A refreshing aloe-inspired body experience." },
  { id: 5, name: "Botanical Body Polish", season: "ALL SEASONS", price: 1299, duration: "40 min", image: img("body-scrub.jpg"), description: "A body-care ritual inspired by botanical ingredients." },
  { id: 6, name: "Aromatic Escape", season: "ALL SEASONS", price: 1799, duration: "50 min", image: img("aromatherapy.jpg"), description: "A calming massage experience with aromatic oils." },
  { id: 7, name: "Relaxation Massage", season: "ALL SEASONS", price: 1999, duration: "60 min", image: img("relaxation-massage.jpg"), description: "A gentle massage designed for relaxation." },
  { id: 8, name: "Seasonal Wellness Ritual", season: "SEASONAL", price: 2299, duration: "70 min", image: img("spring.jpg"), description: "A curated experience inspired by the season you choose." },
];

function Products({ addToCart, cartCount }) {
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
              <li className="nav-item"><Link className="nav-link active" to="/products">Products</Link></li>
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
          <p className="sol-label">THE WELLNESS COLLECTION</p>
          <h1>Find your seasonal ritual.</h1>
          <p>Thoughtfully curated experiences for every time of year.</p>
        </div>
      </section>

      <section className="sol-products section-space">
        <div className="container">
          <div className="sol-catalogue-heading">
            <div>
              <p className="sol-label">OUR COLLECTION</p>
              <h2 className="sol-heading">Spa experiences</h2>
            </div>
            <p>{products.length} experiences to explore</p>
          </div>

          <div className="row g-4">
            {products.map((product, index) => (
              <div className="col-sm-6 col-lg-3" key={product.id} data-aos="fade-up" data-aos-delay={(index % 4) * 70}>
                <article className="sol-product-card">
                  <div className="sol-product-image">
                    <img src={product.image} alt={product.name} />
                    <span className="sol-product-tag">{product.season}</span>
                  </div>
                  <div className="sol-product-info">
                    <span className="sol-product-duration">{product.duration}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="sol-product-bottom">
                      <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                      <button onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`}>+ Add</button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="sol-cart-link">
            <Link className="sol-button" to="/cart">View your cart ↗</Link>
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

export default Products;