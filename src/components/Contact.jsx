import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Contact.css'

function Contact() {
  const { t } = useLanguage()
  
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__heading">{t('contactHeading')}</h2>
        </div>

        <div className="contact__details">
          {/* Email */}
          <div className="contact__item">
            <div className="contact__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div className="contact__info">
              <div className="contact__label">{t('emailLabel')}</div>
              <a href="mailto:info@restaurant-torino.de" className="contact__value">
                info@restaurant-torino.de
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="contact__item">
            <div className="contact__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div className="contact__info">
              <div className="contact__label">{t('phoneLabel')}</div>
              <a href="tel:+49238126246" className="contact__value">
                +49 2381 26246
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="contact__item">
            <div className="contact__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div className="contact__info">
              <div className="contact__label">{t('locationLabel')}</div>
              <div className="contact__value">
                <p>Widumstraße 1</p>
                <p>59065 Hamm, Deutschland</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__cta">
          <a href="tel:+49238126246" className="contact__button">
            {t('requestReservation')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
