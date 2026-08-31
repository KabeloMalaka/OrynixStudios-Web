import { Link } from 'react-router-dom'
import './Footer.css'

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/orynix-studios',
    icon: (
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.25a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.93c0-1.41-.03-3.23-1.97-3.23-1.98 0-2.28 1.55-2.28 3.13V20H9.45V8.5h3.24v1.57h.05c.45-.86 1.56-1.76 3.2-1.76 3.42 0 4.5 2.25 4.5 5.18V20Z" />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/orynixstudios',
    icon: (
      <path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm0 5.94a2.34 2.34 0 1 1 0-4.68 2.34 2.34 0 0 1 0 4.68Zm4.59-6.09a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0ZM20.4 8.11c-.06-1.28-.35-2.42-1.29-3.35-.93-.93-2.07-1.22-3.35-1.29C14.44 3.4 9.56 3.4 8.24 3.47c-1.28.06-2.41.35-3.35 1.29-.93.93-1.22 2.06-1.29 3.35C3.53 9.44 3.53 14.56 3.6 15.89c.06 1.28.35 2.42 1.29 3.35.93.93 2.07 1.22 3.35 1.29 1.32.07 6.2.07 7.52 0 1.28-.06 2.41-.35 3.35-1.29.93-.93 1.22-2.06 1.29-3.35.07-1.32.07-6.2 0-7.52v-.01ZM18.79 17.5a2.53 2.53 0 0 1-1.42 1.42c-.99.39-3.32.3-4.4.3-1.09 0-3.42.08-4.4-.3a2.53 2.53 0 0 1-1.42-1.42c-.39-.98-.3-3.32-.3-4.4 0-1.09-.08-3.42.3-4.4a2.53 2.53 0 0 1 1.42-1.42c.98-.39 3.31-.3 4.4-.3 1.08 0 3.42-.08 4.4.3.65.25 1.16.76 1.42 1.42.39.98.3 3.31.3 4.4 0 1.08.08 3.42-.3 4.4Z" />
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/orynixstudios',
    icon: (
      <path d="M13.5 20v-6.9h2.32l.35-2.7h-2.67V8.68c0-.78.22-1.32 1.34-1.32h1.43V4.95c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.6v2.01H8.35v2.7h2.32V20h2.83Z" />
    ),
  },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__contact">
          <p className="footer__company">Orynix Studios</p>
          <ul className="footer__contact-list">
            <li>
              <a href="mailto:hello@orynixstudios.com">
                hello@orynixstudios.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__social" aria-label="Social media links">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="footer__social-link"
              aria-label={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                {social.icon}
              </svg>
            </a>
          ))}
        </div>

        <div className="footer__legal-links">
          <Link to="/ham/terms" className="footer__link">
            Terms of Use
          </Link>
          <Link to="/ham/privacy" className="footer__link">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
