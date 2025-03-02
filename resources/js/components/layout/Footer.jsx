import React from 'react'
import '../../../css/components/layout/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-logo">
            <img src="/images/ek-logo.png" alt="Eva Klapačová Logo" />
          </div>
          
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          
          <div className="footer-nav">
            <div className="footer-nav-divider"></div>
            <ul className="footer-links">
              <li><a href="/free-konzultace">Free konzultace</a></li>
              <li><a href="/o-mne">O mně</a></li>
              <li><a href="/produkty">Produkty</a></li>
              <li><a href="/hodnoceni">Hodnocení</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </div>
          
          <div className="copyright">
            &copy; {new Date().getFullYear()} Eva Klapačová všechna práva vyhrazerna
          </div>
        </div>
        
        <div className="footer-contact">
          <h2>Kontaktuj mě</h2>
          <form className="contact-form">
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Jméno a příjmení" required />
            <textarea placeholder="Nějaký text, co chce s tebou řešit" rows="4" required></textarea>
            <button type="submit" className="submit-btn">Odeslat</button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer