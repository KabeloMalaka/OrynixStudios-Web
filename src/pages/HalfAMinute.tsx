import { Link } from 'react-router-dom'
import './HalfAMinute.css'

const FEATURES = [
  {
    icon: '🛋️',
    label: 'Local pass-and-play mode, everyone huddles around one device',
  },
  {
    icon: '🌐',
    label: 'Online multiplayer rooms with real-time voice chat',
  },
  {
    icon: '⏱️',
    label: 'Timed rounds that keep every turn fast and frantic',
  },
  {
    icon: '🃏',
    label: 'Card categories and packs for endless prompt variety',
  },
  {
    icon: '🪙',
    label: 'Coin purchases to unlock extra card packs',
  },
]

// Placeholder until the Google Play listing goes live.
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.orynixstudios.halfaminute'

function HalfAMinute() {
  return (
    <div className="ham">
      <section className="ham__hero">
        <span className="ham__mark" aria-hidden="true">
          ⏱️
        </span>
        <p className="ham__eyebrow">Orynix Studios</p>
        <h1 className="ham__title">Half A Minute</h1>
        <p className="ham__tagline">
          Half A Minute is a fast-paced party game where teams race the clock
          to guess prompts from cards. Play locally on one device or online
          with friends anywhere.
        </p>

        <div className="ham__cta">
          <a
            className="ham__play-badge"
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ Get it on Google Play
          </a>
        </div>
        <p className="ham__play-note">Coming soon!</p>
      </section>

      <section className="ham__section">
        <h2 className="ham__section-title">Features</h2>
        <ul className="ham__features">
          {FEATURES.map((feature) => (
            <li className="ham__feature" key={feature.label}>
              <span className="ham__feature-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="ham__crosslinks">
        <Link to="/ham/delete-account">Delete Account</Link>
        {' · '}
        <Link to="/ham/terms">Terms of Use</Link>
        {' · '}
        <Link to="/ham/privacy">Privacy Policy</Link>
        {' · '}
        <a href="mailto:hello@orynixstudios.com">hello@orynixstudios.com</a>
      </p>
    </div>
  )
}

export default HalfAMinute
