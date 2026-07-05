import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "./styles/filters.css";
import "./styles/stats.css";
import "./styles/navbar.css";
import "./styles/notes.css";
import "./styles/hero.css";
import "./styles/cards.css";
import "./styles/quiz.css";
import "./styles/footer.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/whatsapp.css";
import "./styles/backtotop.css";
import "./styles/loader.css";
import "./styles/notfound.css";
import "./styles/features.css";

import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/scrollprogress.css";
import "./styles/cursor.css";
import "./styles/theme.css";

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);