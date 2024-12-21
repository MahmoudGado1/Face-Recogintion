import { Link } from "react-router-dom";
import { useState } from "react";

const FaceRecognition = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const processImage = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setResults(null);

    // Simulate face recognition API call
    setTimeout(() => {
      setResults({
        success: true,
        facesDetected: 2, // Example data
        details: [
          { id: 1, confidence: "95%", position: "Top-left" },
          { id: 2, confidence: "89%", position: "Center-right" },
        ],
      });
      setLoading(false);
    }, 2000);
  };

  const styles = {
    container: {
      maxWidth: "900px",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    },
    section: {
      marginBottom: "20px",
  
    },
    preview: {
      marginTop: "10px",
    },
    previewImage: {
      maxWidth: "100%",
      height: "auto",
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "5px",
    },
    button: {
      marginTop: "10px",
      padding: "10px 15px",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonDisabled: {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    },
    results: {
      backgroundColor: "#f9f9f9",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
  };

  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Face Recognition</h1>
          <ul className="breadcrumb">
            <li>
              <Link to={"/"}>Dashboard</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <Link className="active" to={"/face-recognition"}>
                Face Recognition
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.section}>
          <h2>Upload an Image</h2>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {imagePreview && (
            <div style={styles.preview}>
              <h3>Preview:</h3>
              <img
                src={imagePreview}
                alt="Preview"
                style={styles.previewImage}
              />
            </div>
          )}
          <button
            onClick={processImage}
            disabled={!selectedImage || loading}
            style={{
              ...styles.button,
              ...(loading || !selectedImage ? styles.buttonDisabled : {}),
            }}
          >
            {loading ? "Processing..." : "Process Image"}
          </button>
        </div>

        {results && (
          <div style={styles.results}>
            <h2>Results</h2>
            {results.success ? (
              <div>
                <p>Faces Detected: {results.facesDetected}</p>
                <ul>
                  {results.details.map((face) => (
                    <li key={face.id}>
                      Face {face.id}: Confidence {face.confidence}, Position{" "}
                      {face.position}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No faces detected. Please try again.</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default FaceRecognition;
