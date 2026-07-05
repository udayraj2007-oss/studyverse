import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Stats() {
  return (
    <section className="stats" data-aos="fade-up">

      <div
        className="stat-card"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h2>
          <Counter end={40} suffix="+" />
        </h2>
        <p>Notes</p>
      </div>

      <div
        className="stat-card"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <h2>
          <Counter end={2} />
        </h2>
        <p>Classes</p>
      </div>

      <div
        className="stat-card"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <h2>
          <Counter end={100} suffix="%" />
        </h2>
        <p>Free</p>
      </div>

      <div
        className="stat-card"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <h2>24/7</h2>
        <p>Available</p>
      </div>

    </section>
  );
}

export default Stats;