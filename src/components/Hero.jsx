import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import ContactModal from './ContactModal'
import './Hero.css'

function Hero() {
  const [showContact, setShowContact] = useState(false)

  return (
    <section id="home" className="hero">
      <div className="hero-split">
        <div className="hero-left">
          <h1>{personalInfo.name}</h1>
          <p className="hero-intro">I love taking on new challenges and breaking down complex problems into simple, effective solutions. Security and IT are what I know best, but I'm always looking to grow and learn something new.</p>
          <div className="cta-buttons">
            <button className="btn" onClick={() => setShowContact(true)}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-right">
          <svg className="hero-graphic" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="shield-clip">
                <path d="M200 80 L300 120 L300 230 Q300 320 200 350 Q100 320 100 230 L100 120 Z" />
              </clipPath>
            </defs>
            <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(20,184,166,0.08)" strokeWidth="1" />
            <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(20,184,166,0.06)" strokeWidth="1" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(20,184,166,0.04)" strokeWidth="1" />
            <path d="M200 60 L320 110 L320 240 Q320 340 200 370 Q80 340 80 240 L80 110 Z" fill="rgba(20,184,166,0.15)" stroke="rgba(20,184,166,0.5)" strokeWidth="2.5" />
            <image href="/profile.jpg" x="100" y="80" width="200" height="270" clipPath="url(#shield-clip)" preserveAspectRatio="xMidYMid slice" />
            <path d="M200 60 L320 110 L320 240 Q320 340 200 370 Q80 340 80 240 L80 110 Z" fill="none" stroke="rgba(20,184,166,0.5)" strokeWidth="2.5" />
            <line x1="200" y1="60" x2="200" y2="40" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
            <circle cx="200" cy="38" r="3" fill="rgba(20,184,166,0.3)" />
            <line x1="320" y1="110" x2="350" y2="85" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
            <circle cx="352" cy="83" r="3" fill="rgba(20,184,166,0.3)" />
            <line x1="352" y1="83" x2="380" y2="83" stroke="rgba(20,184,166,0.15)" strokeWidth="1" />
            <circle cx="382" cy="83" r="2" fill="rgba(20,184,166,0.2)" />
            <line x1="320" y1="240" x2="360" y2="240" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
            <circle cx="362" cy="240" r="3" fill="rgba(20,184,166,0.3)" />
            <line x1="362" y1="240" x2="362" y2="275" stroke="rgba(20,184,166,0.15)" strokeWidth="1" />
            <circle cx="362" cy="277" r="2" fill="rgba(20,184,166,0.2)" />
            <line x1="80" y1="110" x2="50" y2="85" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
            <circle cx="48" cy="83" r="3" fill="rgba(20,184,166,0.3)" />
            <line x1="48" y1="83" x2="20" y2="83" stroke="rgba(20,184,166,0.15)" strokeWidth="1" />
            <circle cx="18" cy="83" r="2" fill="rgba(20,184,166,0.2)" />
            <line x1="80" y1="240" x2="40" y2="240" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
            <circle cx="38" cy="240" r="3" fill="rgba(20,184,166,0.3)" />
            <line x1="38" y1="240" x2="38" y2="200" stroke="rgba(20,184,166,0.15)" strokeWidth="1" />
            <circle cx="38" cy="198" r="2" fill="rgba(20,184,166,0.2)" />
            <line x1="140" y1="355" x2="90" y2="375" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
            <circle cx="88" cy="377" r="3" fill="rgba(20,184,166,0.3)" />
            <line x1="260" y1="355" x2="310" y2="375" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
            <circle cx="312" cy="377" r="3" fill="rgba(20,184,166,0.3)" />
            <line x1="200" y1="370" x2="200" y2="395" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
            <circle cx="200" cy="397" r="3" fill="rgba(20,184,166,0.3)" />
            <circle cx="340" cy="160" r="2" fill="rgba(20,184,166,0.15)" />
            <circle cx="60" cy="160" r="2" fill="rgba(20,184,166,0.15)" />
            <circle cx="360" cy="320" r="2" fill="rgba(20,184,166,0.15)" />
            <circle cx="40" cy="320" r="2" fill="rgba(20,184,166,0.15)" />
            <circle cx="140" cy="40" r="2" fill="rgba(20,184,166,0.15)" />
            <circle cx="260" cy="40" r="2" fill="rgba(20,184,166,0.15)" />
          </svg>
        </div>
      </div>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </section>
  )
}

export default Hero
