
import {
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
         <h2>📚 StudyVerse</h2>

          <p>
            India's Free Learning Platform for Class 7–12 Students.
          </p>

          <div className="social-icons">

            <a href="#" target="_blank">
              <FaInstagram />
            </a>

            <a href="#" target="_blank">
              <FaYoutube />
            </a>

            <a href="#" target="_blank">
              <FaTelegram />
            </a>

            <a href="#" target="_blank">
              <FaFacebook />
            </a>

            <a href="#" target="_blank">
              <FaLinkedin />
            </a>

            <a href="#" target="_blank">
              <FaGithub />
            </a>

          </div>

        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <a href="/">🏠 Home</a>
          <a href="/notes">📚 Notes</a>
          <a href="/quiz">📝 Quiz</a>
          <a href="/tests">📄 Tests</a>
          <a href="/about">ℹ About</a>
          <a href="/contact">📞 Contact</a>

        </div>

        <div className="footer-box">

          <h3>Resources</h3>

          <a href="/notes">Class 7 Notes</a>
          <a href="/notes">Class 8 Notes</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>

        </div>

        <div className="footer-box">

          <h3>Contact</h3>

          <p>📧 support@studyverse.in</p>

          <p>📱 +91-9876543210</p>

          <p>📍 Delhi, India</p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 StudyVerse • Made with ❤️ in India

      </div>

    </footer>
  );
}

export default Footer;