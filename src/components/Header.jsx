import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Header.css'
import logoSvg from '../assets/images/brand/logo-torino.svg'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

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
        {/* Logo */}
        <a href="#hero" className="header__logo">
          <img src={logoSvg} alt="Restaurant Torino" className="header__logo-svg" />
        </a>

        {/* Navigation */}
        <nav className="header__nav-center">
          <a href="#hero" className="header__nav-link">{t('home')}</a>
          <a href="#about" className="header__nav-link">{t('menu')}</a>
        </nav>

        {/* CTA Button */}
        <a href="tel:+49238126246" className="header__cta">
          {t('bookTable')}
        </a>

        {/* Contact + Language */}
        <div className="header__nav-right">
          <a href="#contact" className="header__nav-link">{t('contact')}</a>
          <span className="header__nav-separator">|</span>
          <button 
            onClick={toggleLanguage} 
            className="header__nav-link header__lang"
          >
            {language.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
