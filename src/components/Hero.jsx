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
          <div className="hero-photo-wrapper">
            <img src="/profile.jpg" alt="Abderrahmane Lahrichi" className="hero-photo" />
          </div>
          <h1>{personalInfo.name}</h1>
          <p className="hero-intro">I love taking on new challenges and breaking down complex problems into simple, effective solutions. Security and IT are what I know best, but I'm always looking to grow and learn something new.</p>
          <div className="cta-buttons">
            <button className="btn" onClick={() => setShowContact(true)}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-quote">
            <p>"Progress over perfection. I'd rather be learning something new than comfortable with what I already know."</p>
          </div>
        </div>
      </div>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </section>
  )
}

export default Hero
