import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

function TestSubjects() {

  const navigate = useNavigate();

  const { className } = useParams();

  const subjects = [
    "Maths",
    "Science",
  ];

  return (
    <>
      <Header />

      <div className="categories">

        <h2>{className.toUpperCase()} Tests</h2>

        <div className="category-grid">

          {subjects.map((subject) => (

            <div
              key={subject}
              className="category-card"
            >

              <h3>{subject}</h3>

              <p>Chapter Tests</p>

              <p>Mock Tests</p>

              <button
                onClick={() =>
                  navigate(`/tests/${className}/${subject.toLowerCase()}`)
                }
              >
                Open
              </button>

            </div>

          ))}

        </div>

      </div>

      <Footer />

    </>
  );
}

export default TestSubjects;