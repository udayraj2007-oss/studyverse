import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };

  return (

    show && (

      <button
        className="back-top"
        onClick={scrollTop}
      >

        <FaArrowUp />

      </button>

    )

  );

}

export default BackToTop;