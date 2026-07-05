import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubjectCard from "../components/SubjectCard";
import { FaCalculator, FaFlask } from "react-icons/fa";

function Class8() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="quiz-page">

        <h1>📗 Class 8</h1>

        <p>Select your subject</p>

        <div className="quiz-grid">

          <SubjectCard
            title="Maths"
            icon={<FaCalculator size={45} color="#198754" />}
            onClick={() => navigate("/quiz/class8/maths")}
          />

          <SubjectCard
            title="Science"
            icon={<FaFlask size={45} color="#198754" />}
            onClick={() => navigate("/quiz/class8/science")}
          />

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Class8;