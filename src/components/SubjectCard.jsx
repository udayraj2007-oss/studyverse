function SubjectCard({ title, icon, onClick }) {
  return (
    <div className="subject-card" onClick={onClick}>
      <div className="subject-icon">{icon}</div>

      <h2>{title}</h2>

      <button>Select</button>
    </div>
  );
}

export default SubjectCard;