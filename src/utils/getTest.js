import testData from "../data/testData";

function getTest(className, subject, chapter) {

  return (
    testData[className]?.[subject]?.[chapter] || []
  );

}

export default getTest;