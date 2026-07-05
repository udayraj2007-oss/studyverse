import quizData from "../data/quizData";

function getQuiz(className, subject, chapter) {
  try {
    return quizData[className][subject][chapter];
  } catch {
    return [];
  }
}

export default getQuiz;