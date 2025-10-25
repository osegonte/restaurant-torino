import React from 'react'

function About() {
  return (
    <section id="about" style={{ padding: '80px 0', backgroundColor: '#f5f0e9' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '48px', fontFamily: 'Playfair Display, serif' }}>
          Benvenuti a Torino
        </h2>
        <p style={{ textAlign: 'center', marginTop: '20px', maxWidth: '800px', margin: '20px auto' }}>
          Restaurant Torino brings the warmth and flavor of Italy to Hamm.
        </p>
      </div>
    </section>
  )
}

export default About
