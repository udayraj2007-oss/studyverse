import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Header />

      <section className="contact-page">

        <div className="contact-container">

          <h1>📞 Contact Us</h1>

          <p className="contact-subtitle">
            We'd love to hear from you.
          </p>

          <div className="contact-grid">

            {/* Contact Info */}

            <div className="contact-info">

              <h2>Get in Touch</h2>

              <p>
                📧{" "}
                <a href="mailto:vudayraj1@gmail.com">
                  vudayraj1@gmail.com
                </a>
              </p>

              <p>
                📱{" "}
                <a href="tel:+918375897679">
                  +91 8375897679
                </a>
              </p>

              <p>📍 Delhi, India</p>

              <div className="contact-social">

                <a href="#">
                  <FaInstagram size={26} />
                </a>

                <a href="#">
                  <FaYoutube size={26} />
                </a>

                <a href="#">
                  <FaTelegram size={26} />
                </a>

                <a href="#">
                  <FaFacebook size={26} />
                </a>

                <a href="#">
                  <FaLinkedin size={26} />
                </a>

                <a href="#">
                  <FaGithub size={26} />
                </a>

              </div>

            </div>

            {/* Contact Form */}

            <form
              className="contact-form"
              action="https://formsubmit.co/vudayraj1@gmail.com"
              method="POST"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>

              {/* Spam Protection */}
              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
              />

              {/* Disable Captcha */}
              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              {/* Subject */}
              <input
                type="hidden"
                name="_subject"
                value="New Message from StudyVerse"
              />

              {/* After Submit Redirect */}
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/contact"
              />

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;