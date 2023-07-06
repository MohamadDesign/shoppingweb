import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header className="header-section">
        <div className="container">
          <nav className="nav-container">
            <ul className="nav-list">
              <NavLink className="nav-item" to="/">
                <img src="images/favicon.png" className="main-logo" alt="main logo" />
                وب فول
              </NavLink>
              <NavLink to="/about" className="nav-item">
                درباره ما
              </NavLink>
              <NavLink to="/testimonial" className="nav-item">
                نظرسنجی
              </NavLink>
              <NavLink to="/products" className="nav-item">
                محصولات
              </NavLink>
              <NavLink to="/blog" className="nav-item">
                بلاگ
              </NavLink>
              <NavLink to="/contact" className="nav-item">
                ارتباط باما
              </NavLink>

              <NavLink className="nav-item">
                <FaShoppingCart />
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
