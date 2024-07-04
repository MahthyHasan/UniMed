import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "./TermsOfService.css";

function TermsOfService() {
  return (
    <div className="terms-container">
      <NavBar />
      <div className="terms-content">
        <h1>Terms of Service</h1>

        <h2>1. Introduction</h2>
        <p>
          Welcome to UniMed University Medical Center’s website. By accessing or
          using our website, you agree to comply with and be bound by the
          following terms and conditions of use, which together with our privacy
          policy govern UniMed’s relationship with you. If you do not agree to
          these terms, please do not use our website.
        </p>

        <h2>2. Definitions</h2>
        <p>
          <strong>UniMed</strong> refers to UniMed University Medical Center.
        </p>
        <p>
          <strong>Website</strong> refers to all web pages accessible via
          www.unimed.edu.
        </p>
        <p>
          <strong>User</strong> refers to anyone who accesses or uses the
          website.
        </p>

        <h2>3. Use of the Website</h2>
        <h3>Eligibility</h3>
        <p>
          You must be at least 18 years old to use our website. By using the
          website, you represent and warrant that you are at least 18 years old.
        </p>
        <h3>Permitted Use</h3>
        <p>
          You agree to use the website only for lawful purposes and in
          accordance with these Terms of Service. You agree not to use the
          website:
        </p>
        <ul>
          <li>
            In any way that violates any applicable federal, state, local, or
            international law or regulation.
          </li>
          <li>
            For the purpose of exploiting, harming, or attempting to exploit or
            harm minors in any way.
          </li>
          <li>
            To transmit, or procure the sending of, any advertising or
            promotional material without our prior written consent.
          </li>
        </ul>

        <h2>4. Intellectual Property Rights</h2>
        <p>
          The content, layout, design, data, databases, and graphics on this
          website are protected by copyright, trademark, and other intellectual
          property laws. You may not copy, reproduce, republish, download, post,
          broadcast, transmit, make available to the public, or otherwise use
          any content on our website in any way except for your own personal,
          non-commercial use.
        </p>

        <h2>5. Disclaimers</h2>
        <p>
          The information on this website is provided on an "as is" basis. To
          the fullest extent permitted by law, UniMed:
        </p>
        <ul>
          <li>
            Excludes all representations and warranties relating to this website
            and its contents.
          </li>
          <li>
            Excludes all liability for damages arising out of or in connection
            with your use of this website.
          </li>
        </ul>

        <h2>6. Limitation of Liability</h2>
        <p>
          In no event will UniMed, or its employees, agents, suppliers, or
          contractors be liable for any indirect, incidental, special, punitive,
          or consequential damages, or damages for loss of profits, revenue,
          data, or use, incurred by you or any third party, whether in an action
          in contract or tort, arising from your access to, or use of, the
          website.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These Terms of Service and any disputes related to them or the website
          will be governed by and construed in accordance with the laws of [Your
          State/Country], without regard to its conflict of law principles.
        </p>

        <h2>8. Changes to These Terms</h2>
        <p>
          We may update our Terms of Service from time to time. We will notify
          you of any changes by posting the new Terms of Service on this page.
          You are advised to review these Terms of Service periodically for any
          changes. Changes to these Terms of Service are effective when they are
          posted on this page.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at:
          <br />
          University Medical Center
          <br />
          [Uva Wellassa University of Sri Lanka]
          <br />
          [Passara Road, Badulla]
          <br />
          Email: [umo@uwu.ac.lk]
          <br />
          Phone: [0779440894]
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default TermsOfService;
