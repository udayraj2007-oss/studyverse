import { Link } from "react-router-dom";

function PdfCard({ title, file, className, subject }) {
  console.log(title, file);
  return (
    <div className="pdf-card">

      <div className="card-top">
        <span className="class-badge">📘 {className}</span>
        <span className="subject-badge">📚 {subject}</span>
      </div>

      <h3>{title}</h3>

      <div className="btns">

        <a
  href={file}
  target="_blank"
  rel="noreferrer"
>
  <button className="view-btn">
    👁 View PDF
  </button>
</a>

        <a
          href={file}
          download
        >
          <button className="download-btn">
            ⬇ Download
          </button>
        </a>

      </div>

    </div>
  );
}

export default PdfCard;