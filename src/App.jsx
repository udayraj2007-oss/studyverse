import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  useEffect,
  useState,
  lazy,
  Suspense,
} from "react";

import applyTheme from "./utils/applyTheme";

// Components
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import ThemeToggle from "./components/ThemeToggle";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const Notes = lazy(() => import("./pages/Notes"));
const Quiz = lazy(() => import("./pages/Quiz"));
const QuizPage = lazy(() => import("./pages/QuizPage"));
const ChapterList = lazy(() => import("./pages/ChapterList"));
const Tests = lazy(() => import("./pages/Tests"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PdfViewer = lazy(() => import("./pages/PdfViewer"));
const TestSubjects = lazy(() => import("./pages/TestSubjects"));
const TestChapters = lazy(() => import("./pages/TestChapters"));
const TestPage = lazy(() => import("./pages/TestPage"));
const ClassPage = lazy(() => import("./pages/ClassPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    applyTheme();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (

    <BrowserRouter>

      {/* Premium Effects */}

      <ScrollProgress />
      <CursorGlow />

      <Suspense fallback={<Loader />}>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/notes" element={<Notes />} />

          <Route
            path="/viewer"
            element={<PdfViewer />}
          />

          <Route
            path="/quiz"
            element={<Quiz />}
          />

          <Route
            path="/quiz/:className"
            element={<ClassPage />}
          />

          <Route
            path="/quiz/:className/:subject"
            element={<ChapterList />}
          />

          <Route
            path="/quiz/:className/:subject/:chapter"
            element={<QuizPage />}
          />

          <Route
            path="/tests"
            element={<Tests />}
          />

          <Route
            path="/tests/:className"
            element={<TestSubjects />}
          />

          <Route
            path="/tests/:className/:subject"
            element={<TestChapters />}
          />

          <Route
            path="/tests/:className/:subject/:chapter"
            element={<TestPage />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </Suspense>

      {/* Floating Buttons */}

      <ThemeToggle />

      <WhatsAppButton />

      <BackToTop />

    </BrowserRouter>

  );

}

export default App;