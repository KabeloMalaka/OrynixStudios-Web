import { Link } from 'react-router-dom'
import './Policy.css'

function TermsOfUse() {
  return (
    <div className="policy">
      <div className="policy__callout">
        <span className="policy__callout-icon" aria-hidden="true">
          !
        </span>
        <span>
          <strong>Placeholder Notice:</strong> The terms below are
          temporary, generic placeholder text and are not final. They are
          subject to change and will be replaced with an official Terms of
          Use document.
        </span>
      </div>

      <header className="policy__header">
        <p className="policy__eyebrow">Half a Minute (HAM)</p>
        <h1 className="policy__title">Terms of Use</h1>
      </header>

      <p className="policy__crosslink">
        Looking for our <Link to="/privacy">Privacy Policy</Link>?
      </p>

      <section className="policy__section">
        <p className="policy__placeholder-label">
          [Placeholder — Temporary Terms of Use]
        </p>
        <p>
          These Terms of Use ("Terms") govern your access to and use of the
          mobile game "Half a Minute" (HAM) (the "Game"), developed and
          published by [Company Name]. By downloading, installing, or
          using the Game, you agree to be bound by these Terms.
        </p>
        <h3>Acceptable Use</h3>
        <p>
          You agree to use the Game only for lawful purposes and in
          accordance with these Terms. You may not: (a) use the Game to
          engage in cheating, exploiting, or any form of unauthorized
          automation; (b) attempt to reverse engineer, decompile, or
          disassemble the Game; (c) harass, abuse, or harm other players;
          or (d) upload or transmit any unlawful, offensive, or infringing
          content through the Game.
        </p>
        <h3>Accounts</h3>
        <p>
          If the Game allows you to create an account, you are responsible
          for maintaining the confidentiality of your account credentials
          and for all activity that occurs under your account. [Company
          Name] reserves the right to suspend or terminate accounts that
          violate these Terms.
        </p>
        <h3>Intellectual Property</h3>
        <p>
          The Game, including all associated content, trademarks, and
          software, is owned by [Company Name] or its licensors and is
          protected by applicable intellectual property laws. No rights
          are granted to you other than a limited, non-exclusive,
          non-transferable license to use the Game for personal,
          non-commercial purposes.
        </p>
        <h3>Third-Party Services</h3>
        <p>
          The Game may integrate with third-party services (such as
          analytics, advertising, or platform services). Your use of such
          services may be subject to the applicable third party's own
          terms and policies, which [Company Name] does not control.
        </p>
        <h3>Changes to These Terms</h3>
        <p>
          [Company Name] may update these Terms from time to time. Any
          changes will be posted within the Game or on our website, and
          continued use of the Game after such changes constitutes
          acceptance of the revised Terms.
        </p>
        <h3>Disclaimer &amp; Limitation of Liability</h3>
        <p>
          The Game is provided "as is" without warranties of any kind, to
          the fullest extent permitted by law. [Company Name] shall not be
          liable for any indirect, incidental, or consequential damages
          arising from your use of the Game.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have questions about these Terms, please contact us at
          [contact email].
        </p>
      </section>
    </div>
  )
}

export default TermsOfUse
