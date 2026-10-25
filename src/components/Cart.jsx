import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../images";

function Cart({ cart, cartCount, updateQuantity, removeFromCart }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please select a wellness experience.");
      return;
    }
    alert(
      `Demo checkout\nItems: ${cartCount}\nSubtotal: ₹${subtotal.toLocaleString("en-IN")}\n\nNo payment has been processed.`
    );
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
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item ms-lg-3"><Link className="sol-nav-button" to="/cart">Your Cart{cartCount > 0 ? ` (${cartCount})` : ""} ↗</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="sol-page-banner">
        <div className="container" data-aos="fade-up">
          <p className="sol-label">YOUR PERSONAL COLLECTION</p>
          <h1>Your wellness cart.</h1>
          <p>Review the experiences you've selected.</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          {cart.length === 0 ? (
            <div className="sol-empty-cart" data-aos="fade-up">
              <span>✳</span>
              <h2 className="sol-heading">Your cart is taking a quiet moment.</h2>
              <p>You haven't selected any treatments yet.</p>
              <Link to="/products" className="sol-button">Explore experiences ↗</Link>
            </div>
          ) : (
            <div className="row g-5">
              <div className="col-lg-8">
                {cart.map((item) => (
                  <article className="sol-cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="sol-cart-item-info">
                      <h3>{item.name}</h3>
                      <p>{item.duration}</p>
                      <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                      <div className="sol-quantity">
                        <button onClick={() => updateQuantity(item.id, -1)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
                      </div>
                      <button className="sol-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                    <strong className="sol-line-total">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </strong>
                  </article>
                ))}
              </div>

              <div className="col-lg-4">
                <div className="sol-order-summary">
                  <p className="sol-label">YOUR SUMMARY</p>
                  <h2>Order total</h2>
                  <div><span>Subtotal</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
                  <div><span>Booking fees</span><span>Calculated later</span></div>
                  <hr />
                  <div className="sol-total-row"><span>Total</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
                  <button className="sol-button w-100 mt-3" onClick={checkout}>Continue to checkout ↗</button>
                  <p className="sol-checkout-note">Demo only. No payment or appointment is created.</p>
                  <Link to="/products" className="sol-text-link">Continue exploring</Link>
                </div>
              </div>
            </div>
          )}
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

export default Cart;