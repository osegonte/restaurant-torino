import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/About.css'

function About() {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__heading">{t('aboutHeading')}</h2>
          <div className="about__text">
            <p className="about__paragraph">{t('aboutP1')}</p>
            <p className="about__paragraph">{t('aboutP2')}</p>
          </div>
        </div>

        <div className="about__image-wrapper">
          <div className="about__image"></div>
        </div>
      </div>
    </section>
  )
}

export default About
