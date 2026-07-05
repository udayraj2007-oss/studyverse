import { useNavigate } from "react-router-dom";
import siteConfig from "../config/siteConfig";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" data-aos="fade-up">

      <div className="hero-bg-circle circle1"></div>
      <div className="hero-bg-circle circle2"></div>

      <div className="hero-content">

        <div className="hero-badge">
          🚀 India's Free Learning Platform
        </div>

        <h1>{siteConfig.siteName}</h1>

        <h2>
          Learn Smarter.
          <br />
          Score Better.
        </h2>

        <p>
          Free Notes, Chapter-wise Quizzes, Mock Tests and PDF Notes
          for Class 7 to Class 12 — beautifully organized in one place.
        </p>

        <div className="hero-stats">

  <div>
    <h3>250+</h3>
    <span>📚 Notes</span>
  </div>

  <div>
    <h3>5000+</h3>
    <span>📝 Quiz Questions</span>
  </div>

  <div>
    <h3>100%</h3>
    <span>🎯 Free Forever</span>
  </div>

</div>
        

        <div className="hero-buttons">

          <button onClick={() => navigate("/notes")}>
            📚 Browse Notes
          </button>

          <button onClick={() => navigate("/quiz")}>
            📝 Start Quiz
          </button>

        </div>

      </div>

      <div className="floating-card card1">
        📖 Notes
      </div>

      <div className="floating-card card2">
        📝 Quiz
      </div>

      <div className="floating-card card3">
        🎯 Tests
      </div>


    </section>
  );
}

export default Hero;