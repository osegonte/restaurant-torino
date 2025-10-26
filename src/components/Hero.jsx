import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Hero.css'

function Hero() {
  const { t } = useLanguage()
  
  return (
    <section id="hero" className="hero">
      <div className="hero__background"></div>
      <div className="hero__overlay"></div>
      
      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__line">{t('heroLine1')}</p>
          <p className="hero__line">{t('heroLine2')}</p>
          <p className="hero__welcome">{t('heroWelcome')}</p>
          <h1 className="hero__title">{t('heroTitle')}</h1>
        </div>
        
        <div className="hero__buttons">
          <a href="#discover" className="hero__btn">
            {t('viewMenu')}
          </a>
        </div>
      </div>
      
      <div className="hero__scroll">
        <div className="hero__scroll-dot"></div>
      </div>
    </section>
  )
}

export default Hero
