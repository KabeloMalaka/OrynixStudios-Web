import { Link } from 'react-router-dom'
import './Policy.css'

function PrivacyPolicy() {
  return (
    <div className="policy">
      <div className="policy__callout">
        <span className="policy__callout-icon" aria-hidden="true">
          !
        </span>
        <span>
          <strong>Placeholder Notice:</strong> The policy below is
          temporary, generic placeholder text and is not final. It is
          subject to change and will be replaced with an official Privacy
          Policy document.
        </span>
      </div>

      <header className="policy__header">
        <p className="policy__eyebrow">Half a Minute (HAM)</p>
        <h1 className="policy__title">Privacy Policy</h1>
      </header>

      <p className="policy__crosslink">
        Looking for our <Link to="/terms">Terms of Use</Link>?
      </p>

      <section className="policy__section">
        <p className="policy__placeholder-label">
          [Placeholder — Temporary Privacy Policy]
        </p>
        <p>
          This Privacy Policy describes how [Company Name] collects, uses,
          and handles information in connection with the mobile game "Half
          a Minute" (HAM) (the "Game").
        </p>
        <h3>Information We Collect</h3>
        <p>
          We may collect information such as device identifiers, gameplay
          data, in-app purchase history, and general usage statistics to
          operate and improve the Game. If the Game supports account
          creation, we may also collect information you provide, such as a
          username or email address.
        </p>
        <h3>How We Use Information</h3>
        <p>
          Collected information may be used to: operate and maintain the
          Game; improve gameplay features and performance; provide
          customer support; analyze usage trends; and communicate with you
          about updates, where applicable.
        </p>
        <h3>Third-Party Services</h3>
        <p>
          The Game may use third-party services for analytics,
          advertising, crash reporting, or cloud infrastructure. These
          third parties may collect and process information according to
          their own privacy policies. [Company Name] is not responsible
          for the practices of third-party services.
        </p>
        <h3>Data Retention &amp; Security</h3>
        <p>
          We take reasonable measures to protect information collected
          through the Game, though no method of transmission or storage is
          completely secure. Information is retained only as long as
          necessary for the purposes described in this Policy, unless a
          longer retention period is required by law.
        </p>
        <h3>Children's Privacy</h3>
        <p>
          The Game is not intended for children under the age required by
          applicable law without parental consent. We do not knowingly
          collect personal information from children in violation of
          applicable law.
        </p>
        <h3>Changes to This Policy</h3>
        <p>
          [Company Name] may update this Privacy Policy from time to time.
          Changes will be posted within the Game or on our website, and
          your continued use of the Game after such changes constitutes
          acceptance of the revised Policy.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have questions about this Privacy Policy, please contact
          us at [contact email].
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicy
