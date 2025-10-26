import React from 'react'
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Restaurant Torino</h3>
            <p className="footer__text">
              Authentic Italian cuisine in the heart of Hamm
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Contact</h4>
            <div className="footer__links-column">
              <a href="tel:+49238126246" className="footer__link">02381 26246</a>
              <a href="mailto:info@restaurant-torino.de" className="footer__link">info@restaurant-torino.de</a>
              <p className="footer__text">
                Widumstraße 1<br />
                59065 Hamm
              </p>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Hours</h4>
            <div className="footer__links-column">
              <p className="footer__text">
                Monday – Sunday<br />
                11:00 – 23:00
              </p>
              <p className="footer__text footer__text--small">
                Kitchen closes at 22:30
              </p>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Quick Links</h4>
            <div className="footer__links-column">
              <a href="#hero" className="footer__link">Home</a>
              <a href="#about" className="footer__link">About</a>
              <a href="#contact" className="footer__link">Contact</a>
              <a href="#privacy" className="footer__link">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Restaurant Torino. All rights reserved.
          </p>
          <p className="footer__credit">
            Website by <a href="#" className="footer__credit-link">Osegonte Web Studio</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
