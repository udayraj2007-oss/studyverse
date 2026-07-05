import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import getTest from "../utils/getTest";

function TestPage() {

  const { className, subject, chapter } = useParams();

  const questions = getTest(className, subject, chapter);
  console.log(className, subject, chapter);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [testFinished, setTestFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <>
        <Header />

        <div className="quiz-page">
          <h1>⚠️ Test Not Found</h1>
          <p>This chapter doesn't have any test yet.</p>
        </div>

        <Footer />
      </>
    );
  }

  if (testFinished) {
    return (
      <>
        <Header />

        <div className="quiz-page">

          <h1>🎉 Test Completed</h1>

          <h2>
            Score: {score} / {questions.length}
          </h2>

        </div>

        <Footer />
      </>
    );
  }

  const handleNext = () => {

    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTestFinished(true);
    }

  };

  return (
    <>
      <Header />

      <div className="quiz-page">

        <h2>
          Question {currentQuestion + 1} of {questions.length}
        </h2>

        <h3>{questions[currentQuestion].question}</h3>

        {questions[currentQuestion].options.map((option) => (

          <div
            key={option}
            className="option"
          >

            <button
              className="view-btn"
              style={{
                width: "100%",
                marginBottom: "15px",
                background:
                  selectedOption === option
                    ? "#146c43"
                    : "#198754"
              }}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </button>

          </div>

        ))}

        <br />

        <button
          className="view-btn"
          disabled={!selectedOption}
          onClick={handleNext}
        >
          {currentQuestion === questions.length - 1
            ? "Submit Test"
            : "Next ➜"}
        </button>

      </div>

      <Footer />
    </>
  );
}

export default TestPage;