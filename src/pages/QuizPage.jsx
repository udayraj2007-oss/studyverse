import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getQuiz from "../utils/getQuiz";
import "../styles/quiz.css";

function QuizPage() {

  const { className, subject, chapter } = useParams();

  const questions = getQuiz(className, subject, chapter);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  if (!questions || questions.length === 0) {
    return (
      <>
        <Header />

        <div className="quiz-page">
          <h1>⚠️ Quiz Not Found</h1>
          <p>This chapter doesn't have any questions yet.</p>
        </div>

        <Footer />
      </>
    );
  }

  const handleNext = () => {

    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [...prev, selectedOption]);
    setSelectedOption("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }

  };

  const handlePrevious = () => {

    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption("");
    }

  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {

    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <>
        <Header />

        <div className="quiz-page">
          <div className="question-palette">

  {questions.map((_, index) => (

    <button
      key={index}
      className={
        currentQuestion === index
          ? "palette-btn active"
          : "palette-btn"
      }
      onClick={() => {
        setCurrentQuestion(index);
        setSelectedOption("");
      }}
    >
      {index + 1}
    </button>

  ))}

</div>

          <div className="result-card">

            <h1>🏆 Quiz Completed</h1>

            <h2>
              Score : {score} / {questions.length}
            </h2>

            <h2>
              Percentage : {percentage}%
            </h2>

            <h3>
              ✅ Correct Answers : {score}
            </h3>

            <h3>
              ❌ Wrong Answers : {questions.length - score}
            </h3>

            <button
              className="view-btn"
              onClick={restartQuiz}
            >
              🔄 Retry Quiz
            </button>
            <hr style={{ margin: "30px 0" }} />

<h2>📖 Review Answers</h2>

{questions.map((q, index) => (

  <div
    key={index}
    style={{
      textAlign: "left",
      marginTop: "25px",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
    }}
  >

    <h3>
      Q{index + 1}. {q.question}
    </h3>

    <p>
      <strong>Your Answer:</strong>{" "}
      <span
        style={{
          color:
            userAnswers[index] === q.answer
              ? "green"
              : "red",
        }}
      >
        {userAnswers[index] || "Not Answered"}
      </span>
    </p>

    <p>
      <strong>Correct Answer:</strong>{" "}
      <span style={{ color: "green" }}>
        {q.answer}
      </span>
    </p>

  </div>

))}

          </div>

        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="quiz-page">

        {/* Progress Bar */}

        <div
          style={{
            width: "100%",
            height: "12px",
            background: "#ddd",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "25px",
          }}
        >

          <div
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              height: "100%",
              background: "#198754",
              transition: "0.4s",
            }}
          />

        </div>

        <h2>
          Question {currentQuestion + 1} of {questions.length}
        </h2>

        <h3>
          {questions[currentQuestion].question}
        </h3>

        <p
          style={{
            color: "#666",
            marginBottom: "20px",
          }}
        >
          Choose the correct answer.
        </p>

        {questions[currentQuestion].options.map((option) => (

          <div
            key={option}
            className="option"
          >

            <label>

              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={(e) =>
                  setSelectedOption(e.target.value)
                }
              />

              {" "}

              {option}

            </label>

          </div>

        ))}

        <div
          className="quiz-buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >

          <button
            className="view-btn"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ⬅ Previous
          </button>

          <button
            className="view-btn"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion === questions.length - 1
              ? "Submit Quiz"
              : "Next ➜"}
          </button>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default QuizPage;