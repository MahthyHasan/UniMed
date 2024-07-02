import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "./Privacy.css";

function Privacy() {
  return (
    <div className="privacy-container">
      <NavBar />
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        

        <h2> Introduction</h2>
        <p>
          Welcome to the University Medical Center Website. Your privacy is
          important to us. This Privacy Policy explains how we collect, use,
          disclose, and protect your personal information when you use our
          website and services.
        </p>

        <h2> Information We Collect</h2>
        <p>We may collect and process the following information about you:</p>
        <ul>
          <li>
            Personal Information: Name, email address, phone number, date of
            birth, and other contact details.
          </li>
          <li>
            Medical Information: Health records, medical history, diagnosis,
            treatment information, and other health-related data.
          </li>
          <li>
            Usage Data: Information about how you use our website, including IP
            address, browser type, pages visited, and the time and date of your
            visit.
          </li>
          <li>
            Cookies: Data collected through cookies and similar tracking
            technologies.
          </li>
        </ul>

        <h2> How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>
            Providing Services: To deliver our medical services, manage your
            health records, and provide you with personalized health care.
          </li>
          <li>
            Communication: To respond to your inquiries, send appointment
            reminders, and provide updates about our services.
          </li>
          <li>
            Improvement: To improve our website, services, and user experience
            through analysis and research.
          </li>
          <li>
            Compliance: To comply with legal obligations and protect the rights
            and safety of our users and staff.
          </li>
        </ul>

        <h2> How We Share Your Information</h2>
        <p>
          We do not sell or rent your personal information. We may share your
          information with:
        </p>
        <ul>
          <li>
            Health Care Providers: With your consent, to coordinate your care
            with other health care providers.
          </li>
          <li>
            Service Providers: Third-party vendors who assist us in providing
            our services, subject to confidentiality agreements.
          </li>
          <li>
            Legal Authorities: When required by law or necessary to protect our
            rights, property, or safety.
          </li>
        </ul>

        <h2> Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          disclosure, alteration, and destruction.
        </p>

        <h2> Your Rights</h2>
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul>
          <li>
            Access: To request a copy of your personal information we hold.
          </li>
          <li>
            Correction: To request corrections to inaccurate or incomplete
            information.
          </li>
          <li>
            Deletion: To request the deletion of your personal information,
            subject to certain exceptions.
          </li>
          <li>
            Restriction: To request the restriction of processing your personal
            information.
          </li>
          <li>
            Objection: To object to the processing of your personal information.
          </li>
          <li>
            Data Portability: To request the transfer of your personal
            information to another organization.
          </li>
        </ul>

        <h2> Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to collect
          information about your interactions with our website. You can manage
          your cookie preferences through your browser settings.
        </p>

        <h2> Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. We
          encourage you to review this Privacy Policy periodically.
        </p>

        <h2> Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
          <br />
          University Medical Center
          <br />
          [Uva wellassa University of Sri Lanka]
          <br />
          [Passara Road, Badulla]
          <br />
          Email: [umo@uwu.ac.lk]
          <br />
          Phone:[0779440894]
        </p>
      </div>
      <Footer />
    </div>
  );
  
}

export default Privacy;
