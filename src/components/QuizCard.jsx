function QuizCard({ title, icon, onClick }) {

  return (

    <div
      className="quiz-card"
      onClick={onClick}
    >

      <div className="quiz-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <button className="view-btn">
        Start Quiz
      </button>

    </div>

  );

}

export default QuizCard;