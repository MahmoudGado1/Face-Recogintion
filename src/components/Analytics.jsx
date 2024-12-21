import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    // Simulate fetching face recognition analytics data
    const fetchFaceRecognitionData = () => {
      setAnalyticsData({
        totalFaces: 1200,
        recognizedFaces: 950,
        unrecognizedFaces: 250,
        trends: [100, 150, 200, 220, 300, 320, 350], // Simulate trends for the last 7 days
      });
    };

    fetchFaceRecognitionData();
  }, []);

  // Chart.js data for the line chart
  const chartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"], // Last 7 days
    datasets: [
      {
        label: "Recognized Faces",
        data: analyticsData ? analyticsData.trends : [],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    },
    metrics: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    metricCard: {
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      width: "22%",
      textAlign: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    chartSection: {
      marginTop: "20px",
    },
    breadcrumb: {
      margin: "10px 0",
    },
    chart: {
      width: "100%",
      height: "400px",
    },
  };

  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Face Recognition Analytics</h1>
          <ul className="breadcrumb" style={styles.breadcrumb}>
            <li>
              <Link to={"/"}>Dashboard</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <Link className="active" to={"/analytics"}>
                Analytics
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.metrics}>
          <div style={styles.metricCard}>
            <h3>Total Faces Detected</h3>
            <p>{analyticsData ? analyticsData.totalFaces : "Loading..."}</p>
          </div>
          <div style={styles.metricCard}>
            <h3>Recognized Faces</h3>
            <p>{analyticsData ? analyticsData.recognizedFaces : "Loading..."}</p>
          </div>
          <div style={styles.metricCard}>
            <h3>Unrecognized Faces</h3>
            <p>{analyticsData ? analyticsData.unrecognizedFaces : "Loading..."}</p>
          </div>
        </div>

        <div style={styles.chartSection}>
          <h2>Recognition Trends Over Last 7 Days</h2>
          {analyticsData ? (
            <div style={styles.chart}>
              <Line data={chartData} />
            </div>
          ) : (
            <p>Loading chart...</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Analytics;
