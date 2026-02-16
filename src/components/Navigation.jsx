import { smoothScroll } from '../utils/helpers'
import './Navigation.css'

function Navigation({ activeSection }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'learning', label: 'Learning' }
  ]

  return (
    <nav className="navigation">
      <svg className="nav-shield" viewBox="60 40 280 360" xmlns="http://www.w3.org/2000/svg">
        <path d="M200 60 L320 110 L320 240 Q320 340 200 370 Q80 340 80 240 L80 110 Z" fill="rgba(20,184,166,0.35)" stroke="rgba(20,184,166,0.8)" strokeWidth="6" />
        <rect x="175" y="195" width="50" height="40" rx="4" fill="rgba(94,234,212,0.2)" stroke="rgba(94,234,212,0.9)" strokeWidth="5" />
        <path d="M185 195 L185 175 Q185 160 200 160 Q215 160 215 175 L215 195" fill="none" stroke="rgba(94,234,212,0.9)" strokeWidth="5" />
        <circle cx="200" cy="210" r="6" fill="rgba(94,234,212,0.9)" />
        <rect x="197" y="214" width="6" height="12" rx="2" fill="rgba(94,234,212,0.9)" />
      </svg>
      <ul>
        {navItems.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={(e) => smoothScroll(e, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
