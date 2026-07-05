import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuizCard from "../components/QuizCard";
import { FaGraduationCap } from "react-icons/fa";
import classes from "../data/classes";

function Quiz() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="quiz-page">

        <h1>📝 Select Your Class</h1>

        <p>
          Choose your class to start chapter-wise quizzes.
        </p>

        <div className="quiz-grid">

          {classes.map((item) => (

            <QuizCard
              key={item.id}
              title={item.name}
              icon={<FaGraduationCap size={50} color="#198754" />}
              onClick={() => navigate(`/quiz/${item.id}`)}
            />

          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Quiz;