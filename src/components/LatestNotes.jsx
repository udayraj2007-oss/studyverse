import { useNavigate } from "react-router-dom";
import notes from "../data/notes";
import PdfCard from "./PdfCard";

function LatestNotes() {

  const navigate = useNavigate();

  const latest = notes.slice(0,4);

  return (

    <section className="latest-notes" data-aos="fade-up">

      <h2>📄 Latest Notes</h2>

      <div className="cards">

        {latest.map((note,index)=>(

          <PdfCard
            key={index}
            title={note.title}
            file={note.file}
            className={note.class}
            subject={note.subject}
          />

        ))}

      </div>

      <button
        className="view-all-btn"
        onClick={()=>navigate("/notes")}
      >
        View All Notes →
      </button>

    </section>

  );
}

export default LatestNotes;
