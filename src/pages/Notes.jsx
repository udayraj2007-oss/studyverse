import { useState } from "react";
import Header from "../components/Header";
import PdfCard from "../components/PdfCard";
import notes from "../data/notes";

function Notes() {
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [search, setSearch] = useState("");

 const filteredNotes = notes.filter((note) => {
  const classMatch =
    selectedClass === "All" || note.class === selectedClass;

  const subjectMatch =
    selectedSubject === "All" || note.subject === selectedSubject;

  const searchMatch =
    note.title.toLowerCase().includes(search.toLowerCase());

  return classMatch && subjectMatch && searchMatch;
});

  return (
    <>
      <Header />

      <div className="notes-page">

        <h1>📚 Notes Library</h1>

        <p>Choose your class and subject</p>

        <div className="search-box">

  <input
    type="text"
    placeholder="🔍 Search notes by chapter..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

</div>

        {/* Class Buttons */}

        <div className="filter-group">

          <button onClick={() => setSelectedClass("All")}>
            All
          </button>

          <button onClick={() => setSelectedClass("Class 7")}>
            📘 Class 7
          </button>

          <button onClick={() => setSelectedClass("Class 8")}>
            📗 Class 8
          </button>

        </div>

        {/* Subject Buttons */}

        <div className="filter-group">

          <button onClick={() => setSelectedSubject("All")}>
            All
          </button>

          <button onClick={() => setSelectedSubject("Maths")}>
            📖 Maths
          </button>

          <button onClick={() => setSelectedSubject("Science")}>
            🧪 Science
          </button>

        </div>

        <h3>
          {filteredNotes.length} Notes Found
        </h3>

        <div className="cards" data-aos="fade-up">

          {filteredNotes.map((note, index) => (

            <PdfCard
              key={index}
              title={note.title}
              file={note.file}
              className={note.class}
              subject={note.subject}
            />

          ))}

        </div>

      </div>
    </>
  );
}

export default Notes;