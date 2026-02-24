import { useEffect, useRef } from 'react'
import { observeElements } from '../utils/helpers'
import './About.css'

const interests = [
  { name: 'Soccer', icon: '⚽' },
  { name: 'Football', icon: '🏈' },
  { name: 'Pickleball', icon: '🏓' },
  { name: 'Volleyball', icon: '🏐' },
  { name: 'Hiking', icon: '🥾' },
  { name: 'Fishing', icon: '🎣' },
  { name: 'Camping', icon: '🏕️' }
]

function About() {
  const cardsRef = useRef([])

  useEffect(() => {
    const cleanup = observeElements(cardsRef.current)
    return cleanup
  }, [])

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <p className="about-text" ref={el => cardsRef.current[0] = el}>
        Outside of work, I'm all about staying active and enjoying the outdoors. Whether it's a competitive game on the field or a quiet morning by the water, I like to stay moving and make the most of my time off.
      </p>
      <div className="about-grid">
        {interests.map((item, index) => (
          <div
            key={item.name}
            className="about-card"
            ref={el => cardsRef.current[index + 1] = el}
          >
            <span className="about-icon">{item.icon}</span>
            <span className="about-label">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
