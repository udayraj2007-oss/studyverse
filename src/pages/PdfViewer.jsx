import { useLocation } from "react-router-dom";

function PdfViewer() {
  const location = useLocation();

  console.log("STATE:", location.state);

  return (
    <div style={{ padding: "20px" }}>
      <h2>PDF Viewer Test</h2>

      <p>
        <strong>PDF:</strong> {location.state?.file}
      </p>
      <pre>{JSON.stringify(location.state, null, 2)}</pre>

      <object
  data={location.state?.file}
  type="application/pdf"
  width="100%"
  height="800"
>
  PDF cannot be displayed.
</object>
    </div>
  );
}

export default PdfViewer;