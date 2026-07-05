import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubjectCard from "../components/SubjectCard";
import { FaCalculator, FaFlask } from "react-icons/fa";

function ClassPage() {

  const navigate = useNavigate();

  const { className } = useParams();

  return (
    <>
      <Navbar />

      <div className="quiz-page">

        <h1>📘 {className.toUpperCase()}</h1>

        <p>Select your subject</p>

        <div className="quiz-grid">

          <SubjectCard
            title="Maths"
            icon={<FaCalculator size={45} color="#198754" />}
            onClick={() =>
              navigate(`/quiz/${className}/maths`)
            }
          />

          <SubjectCard
            title="Science"
            icon={<FaFlask size={45} color="#198754" />}
            onClick={() =>
              navigate(`/quiz/${className}/science`)
            }
          />

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ClassPage;