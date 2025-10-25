import React, { useState, useEffect } from 'react'
import '../styles/Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo - Left */}
        <a href="#hero" className="header__logo">
          <span className="header__logo-name">Restaurant Torino</span>
        </a>

        {/* Navigation + Language - Center */}
        <nav className="header__nav">
          <a href="#hero" className="header__nav-link">HOME</a>
          <a href="#about" className="header__nav-link">RESTAURANT</a>
          <a href="#about" className="header__nav-link">STORY</a>
          <a href="#discover" className="header__nav-link">MENU</a>
          <a href="#discover" className="header__nav-link">GALLERY</a>
          <a href="#contact" className="header__nav-link">CONTACT</a>
          <span className="header__nav-separator">|</span>
          <button 
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')} 
            className="header__nav-link header__lang"
          >
            {language.toUpperCase()}
          </button>
        </nav>

        {/* CTA Button - Right */}
        <a href="tel:+49238126246" className="header__cta">
          BOOK A TABLE
        </a>
      </div>
    </header>
  )
}

export default Header
