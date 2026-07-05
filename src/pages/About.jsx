import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />

      <section className="about-page">

        <div className="about-container">

          <h1>📚 About StudyVerse</h1>

          <p className="about-subtitle">
            Learn Smarter. Practice Better. Succeed Faster.
          </p>

          <div className="about-card">

            <h2>Who We Are</h2>

            <p>
              StudyVerse is a free learning platform created to help students
              study smarter with high-quality chapter-wise notes, quizzes,
              mock tests and study resources.
            </p>

          </div>

          <div className="about-card">

            <h2>🎯 Our Mission</h2>

            <p>
              Our mission is to make quality education accessible to every
              student completely free and easy to understand.
            </p>

          </div>

          <div className="about-card">

            <h2>🚀 What We Offer</h2>

            <ul>
              <li>📚 Chapter-wise PDF Notes</li>
              <li>📝 Interactive Quizzes</li>
              <li>📄 Mock Tests</li>
              <li>🎓 Class 7–12 Study Material</li>
              <li>💯 Completely Free Learning</li>
            </ul>

          </div>

          {/* Stats Section */}

          <div className="about-stats">

            <div className="about-stat">
              <h2>40+</h2>
              <span>PDF Notes</span>
            </div>

            <div className="about-stat">
              <h2>2</h2>
              <span>Classes</span>
            </div>

            <div className="about-stat">
              <h2>100%</h2>
              <span>Free Learning</span>
            </div>

            <div className="about-stat">
              <h2>24×7</h2>
              <span>Available</span>
            </div>

          </div>

          {/* Founder Section */}

          <div className="founder-section">

            <div className="founder-image">
  <img
    src="https://via.placeholder.com/180"
    alt="Founder"
  />
</div>

            <div className="founder-content">

              <h2>Meet the Creator</h2>

              <h3>Uday Raj Verma</h3>

              <p>
                Hi! I'm the creator of StudyVerse.
                My goal is to provide high-quality study material,
                chapter-wise notes, quizzes and mock tests to students
                completely free of cost.
              </p>
              <div className="founder-buttons">

  <button>Email Me</button>

  <button>Follow StudyVerse</button>

</div>

            </div>
            <div className="about-card">

  <h2>⭐ Why Choose StudyVerse?</h2>

  <ul>
    <li>✅ 100% Free Study Material</li>
    <li>✅ Easy-to-Understand Notes</li>
    <li>✅ Chapter-wise Quizzes</li>
    <li>✅ Mock Tests for Practice</li>
    <li>✅ Mobile Friendly Design</li>
    <li>✅ Fast & Simple Learning Experience</li>
  </ul>

</div>
<div className="timeline-section">

  <h2>🚀 Our Journey</h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-icon">💡</div>
      <div>
        <h3>Idea Started</h3>
        <p>The vision of providing free education to every student.</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-icon">🛠</div>
      <div>
        <h3>Development</h3>
        <p>Built StudyVerse with modern technologies and a beautiful UI.</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-icon">🚀</div>
      <div>
        <h3>Launch</h3>
        <p>Released chapter-wise notes, quizzes and mock tests.</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-icon">📈</div>
      <div>
        <h3>Future Goal</h3>
        <p>Become India's best free learning platform for school students.</p>
      </div>
    </div>

  </div>

</div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;