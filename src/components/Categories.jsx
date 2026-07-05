import { useNavigate } from "react-router-dom";

function Categories() {

  const navigate = useNavigate();

  return (

    <section className="categories" data-aos="zoom-in">

      <h2>📚 Browse by Class</h2>

      <div className="category-grid">

        <div
          className="category-card"
          onClick={() => navigate("/quiz/class7")}
        >
          <h3>📘 Class 7</h3>

          <p>Maths</p>

          <p>Science</p>

          <button>Explore</button>
        </div>

        <div
          className="category-card"
          onClick={() => navigate("/quiz/class8")}
        >
          <h3>📗 Class 8</h3>

          <p>Maths</p>

          <p>Science</p>

          <button>Explore</button>
        </div>

      </div>

    </section>

  );
}

export default Categories;