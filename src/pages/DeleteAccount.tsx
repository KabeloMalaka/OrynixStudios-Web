import { Link } from 'react-router-dom'
import './Policy.css'

function DeleteAccount() {
  return (
    <div className="policy">
      <header className="policy__header">
        <p className="policy__eyebrow">Half A Minute</p>
        <h1 className="policy__title">Delete Your Half A Minute Account</h1>
      </header>

      <p className="policy__crosslink">
        Back to <Link to="/ham">Half A Minute</Link>
      </p>

      <section className="policy__section">
        <p>
          You can delete your Half A Minute account and all associated data
          at any time.
        </p>

        <h3>In the app</h3>
        <p>
          Open Half A Minute → Profile → Delete Account. This immediately and
          permanently deletes your account, including your email, display
          name, profile photo, coin balance, purchased packs, and game
          history.
        </p>

        <h3>Without the app installed</h3>
        <p>
          Email us at{' '}
          <a href="mailto:hello@orynixstudios.com">
            hello@orynixstudios.com
          </a>{' '}
          from the address associated with your account (or include your
          in-app username) and request deletion. We will delete your account
          and all associated data within 30 days.
        </p>

        <h3>What gets deleted</h3>
        <ul>
          <li>Account profile (email, display name, photo)</li>
          <li>Coin balance and purchase records</li>
          <li>Room/game history</li>
          <li>Any friend connections</li>
        </ul>
        <p>
          Data may be retained briefly in backups or logs required for fraud
          prevention or legal compliance before final purge.
        </p>
      </section>
    </div>
  )
}

export default DeleteAccount
