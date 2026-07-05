import { useState } from "react";

function DarkModeButton() {
  const [dark, setDark] = useState(false);

  function toggleDark() {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <button className="dark-btn" onClick={toggleDark}>
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default DarkModeButton;