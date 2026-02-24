import { useEffect, useRef } from 'react'
import { observeElements } from '../utils/helpers'
import './About.css'

function About() {
  const ref = useRef([])

  useEffect(() => {
    const cleanup = observeElements(ref.current)
    return cleanup
  }, [])

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content" ref={el => ref.current[0] = el}>
        <p>Outside of work, I like to stay active and make the most of my time off. You can usually find me playing soccer, football, pickleball, or volleyball with friends. When the weather's right, I'm out hiking, fishing, or camping.</p>
      </div>
    </section>
  )
}

export default About
