import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

function TestChapters() {

  const navigate = useNavigate();

  const { className, subject } = useParams();

  const chapters = [
    "Chapter 1",
    "Chapter 2",
    "Chapter 3",
    "Chapter 4",
    "Chapter 5",
    "Chapter 6",
    "Chapter 7",
    "Chapter 8",
    "Chapter 9",
    "Chapter 10",
  ];

  return (
    <>
      <Header />

      <div className="categories">

        <h2>
          {className.toUpperCase()} - {subject.toUpperCase()}
        </h2>

        <div className="category-grid">

          {chapters.map((chapter) => (

            <div
              key={chapter}
              className="category-card"
            >

              <h3>{chapter}</h3>

              <p>20 Questions</p>

              <p>30 Minutes</p>

              <button
                onClick={() =>
                  navigate(
                    `/tests/${className}/${subject}/${chapter.toLowerCase().replace(" ", "")}`
                  )
                }
              >
                Start Test
              </button>

            </div>

          ))}

        </div>

      </div>

      <Footer />

    </>
  );
}

export default TestChapters;