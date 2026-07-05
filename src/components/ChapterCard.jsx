function ChapterCard({ title, onClick }) {
  return (
    <div className="chapter-card" onClick={onClick}>
      <h3>{title}</h3>

      <button>Start Quiz</button>
    </div>
  );
}

export default ChapterCard;