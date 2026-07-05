import {
  FaBookOpen,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";

function Features() {
  return (
    <section
      className="features"
      data-aos="fade-up"
    >

      <h2 data-aos="fade-down">
        Why Choose StudyVerse?
      </h2>

      <div className="feature-grid">

        <div
          className="feature-card"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <FaBookOpen size={45} color="#198754" />

          <h3>Free Notes</h3>

          <p>
            Chapter-wise notes for Class 7 & 8.
          </p>

        </div>

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaClipboardCheck size={45} color="#198754" />

          <h3>Interactive Quiz</h3>

          <p>
            Practice chapter-wise MCQs anytime.
          </p>

        </div>

        <div
          className="feature-card"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <FaChartLine size={45} color="#198754" />

          <h3>Track Progress</h3>

          <p>
            Improve your score with regular practice.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;