import React, { createContext, useState, useContext } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    home: 'HOME',
    menu: 'MENU',
    bookTable: 'BOOK A TABLE',
    contact: 'CONTACT',
    heroLine1: 'A DISTINCTIVE TASTE OF ITALY',
    heroLine2: 'IN THE HEART OF HAMM',
    heroWelcome: 'WELCOME TO',
    heroTitle: 'Restaurant Torino',
    viewMenu: 'View Menu',
    aboutHeading: 'Benvenuti a Torino',
    aboutP1: 'Restaurant Torino brings the warmth and authentic flavors of Italy to the heart of Hamm. Our kitchen celebrates traditional Italian recipes passed down through generations, prepared with the finest fresh ingredients sourced locally and from Italy.',
    aboutP2: 'Whether you\'re joining us for an intimate dinner, a family celebration, or a business lunch, we create memorable dining experiences in an atmosphere of genuine Italian hospitality. From our handmade pasta to our carefully curated wine selection, every detail reflects our passion for la dolce vita.',
    contactHeading: 'Contact',
    emailLabel: 'EMAIL',
    phoneLabel: 'PHONE',
    locationLabel: 'LOCATION',
    requestReservation: 'Request a Reservation',
    footerTagline: 'Authentic Italian cuisine in the heart of Hamm',
    footerContact: 'Contact',
    footerHours: 'Hours',
    footerQuickLinks: 'Quick Links',
    footerHome: 'Home',
    footerAbout: 'About',
    footerContactLink: 'Contact',
    footerPrivacy: 'Privacy Policy',
    footerMonSun: 'Monday – Sunday',
    footerHoursTime: '11:00 – 23:00',
    footerKitchen: 'Kitchen closes at 22:30',
    footerRights: 'All rights reserved.',
    footerBy: 'Website by',
  },
  de: {
    home: 'STARTSEITE',
    menu: 'MENÜ',
    bookTable: 'TISCH BUCHEN',
    contact: 'KONTAKT',
    heroLine1: 'EIN EINZIGARTIGER GESCHMACK ITALIENS',
    heroLine2: 'IM HERZEN VON HAMM',
    heroWelcome: 'WILLKOMMEN BEI',
    heroTitle: 'Restaurant Torino',
    viewMenu: 'Menü ansehen',
    aboutHeading: 'Benvenuti a Torino',
    aboutP1: 'Restaurant Torino bringt die Wärme und authentischen Aromen Italiens ins Herz von Hamm. Unsere Küche zelebriert traditionelle italienische Rezepte, die über Generationen weitergegeben wurden, zubereitet mit den frischesten Zutaten aus der Region und Italien.',
    aboutP2: 'Ob Sie uns für ein intimes Abendessen, eine Familienfeier oder ein Geschäftsessen besuchen – wir schaffen unvergessliche kulinarische Erlebnisse in einer Atmosphäre echter italienischer Gastfreundschaft. Von unserer handgemachten Pasta bis zu unserer sorgfältig zusammengestellten Weinauswahl spiegelt jedes Detail unsere Leidenschaft für la dolce vita wider.',
    contactHeading: 'Kontakt',
    emailLabel: 'E-MAIL',
    phoneLabel: 'TELEFON',
    locationLabel: 'STANDORT',
    requestReservation: 'Reservierung anfragen',
    footerTagline: 'Authentische italienische Küche im Herzen von Hamm',
    footerContact: 'Kontakt',
    footerHours: 'Öffnungszeiten',
    footerQuickLinks: 'Schnelllinks',
    footerHome: 'Startseite',
    footerAbout: 'Über uns',
    footerContactLink: 'Kontakt',
    footerPrivacy: 'Datenschutz',
    footerMonSun: 'Montag – Sonntag',
    footerHoursTime: '11:00 – 23:00',
    footerKitchen: 'Küche schließt um 22:30',
    footerRights: 'Alle Rechte vorbehalten.',
    footerBy: 'Website von',
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('de')
  
  const t = (key) => {
    return translations[language]?.[key] || key
  }
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en')
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
