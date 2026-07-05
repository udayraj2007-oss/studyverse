import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChapterCard from "../components/ChapterCard";
import chapters from "../data/chapters";

function ChapterList() {

  const navigate = useNavigate();

  const { className, subject } = useParams();

  const chapterList =
  chapters[className]?.[subject] || [];

  return (
    <>
      <Navbar />

      <div className="quiz-page">

        <h1>
          {className.toUpperCase()} - {subject.toUpperCase()}
        </h1>

        <p>
          Select a chapter to start the quiz.
        </p>

        <div className="quiz-grid">

{chapterList.length > 0 ? (
            chapters.map((chapter) => (

              <ChapterCard
                key={chapter}
                title={chapter}
                onClick={() =>
                  navigate(
                    `/quiz/${className}/${subject}/${chapter
                      .toLowerCase()
                      .replace(/\s+/g, "")}`
                  )
                }
              />

            ))

          ) : (

            <h2>No Chapters Available</h2>

          )}

        </div>

      </div>

      <Footer />

    </>
  );
}

export default ChapterList;