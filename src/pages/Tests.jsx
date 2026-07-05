import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Tests() {

  const navigate = useNavigate();

  const classes = [
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
  ];

  return (
    <>
      <Header />

      <div className="categories">

        <h2>📝 Practice Tests</h2>

        <div className="category-grid">

          {classes.map((item) => (

            <div
              key={item}
              className="category-card"
            >

              <h3>{item}</h3>

              <p>Chapter Tests</p>

              <p>Full Syllabus Tests</p>

              <button
                onClick={() =>
                  navigate(`/tests/${item.toLowerCase().replace(" ", "")}`)
                }
              >
                Start Tests
              </button>

            </div>

          ))}

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Tests;