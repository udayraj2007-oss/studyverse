import { useEffect, useState } from "react";

function CursorGlow() {

  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  return (

    <div
      className="cursor-glow"
      style={{
        left: position.x,
        top: position.y,
      }}
    ></div>

  );

}

export default CursorGlow;