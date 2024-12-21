import { Link } from "react-router-dom";
import { useState } from "react";

// Sample student images (replace with real URLs)
const sampleImages = {
  "John Doe": "https://www.w3schools.com/w3images/avatar2.png",
  "Jane Smith": "https://www.w3schools.com/w3images/avatar6.png",
  "Alice Johnson": "https://www.w3schools.com/w3images/avatar4.png",
  "Bob Brown": "https://www.w3schools.com/w3images/avatar5.png",
};

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: "John Doe", date: "2024-12-20", status: "Present" },
    { id: 2, name: "Jane Smith", date: "2024-12-20", status: "Absent" },
    { id: 3, name: "Alice Johnson", date: "2024-12-20", status: "Present" },
    { id: 4, name: "Bob Brown", date: "2024-12-20", status: "Late" },
    { id: 4, name: "Bob Brown", date: "2024-12-20", status: "Late" },
  ]);

  const [filter, setFilter] = useState("all");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const sortData = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    const sortedData = [...attendanceData].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setAttendanceData(sortedData);
    setSortField(field);
    setSortOrder(order);
  };

  const filterData = () => {
    if (filter === "all") return attendanceData;
    return attendanceData.filter((record) => record.status.toLowerCase() === filter);
  };

  const paginateData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handleChangePage = (page) => setCurrentPage(page);

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
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      backgroundColor: "#f4f4f4",
      cursor: "pointer",
      padding: "12px",
      textAlign: "left",
    },
    td: {
      padding: "10px",
      border: "1px solid #ddd",
      textAlign: "left",
    },
    image: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    button: {
      padding: "8px 12px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    pagination: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
    },
    pageButton: {
      margin: "0 5px",
      padding: "8px 12px",
      backgroundColor: "#ddd",
      border: "1px solid #ccc",
      borderRadius: "4px",
      cursor: "pointer",
    },
    activePageButton: {
      backgroundColor: "#4CAF50",
      color: "white",
    },
  };

  const filteredData = filterData();
  const paginatedData = paginateData(filteredData);

  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Attendance Data</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <Link className="active" to="/attendance">
                Attendance Data
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div style={styles.container}>
        <div style={{ marginBottom: "20px" }}>
          <label>Filter By Status: </label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            style={{ padding: "8px", borderRadius: "4px" }}
          >
            <option value="all">All</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
            <option value="late">Late</option>
          </select>
        </div>

        <h2>Attendance Records</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th} onClick={() => sortData("id")}>
                ID {sortField === "id" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th style={styles.th} onClick={() => sortData("name")}>
                Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th style={styles.th} onClick={() => sortData("date")}>
                Date {sortField === "date" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th style={styles.th} onClick={() => sortData("status")}>
                Status{" "}
                {sortField === "status" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th style={styles.th}>Face Image</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((record) => (
              <tr key={record.id}>
                <td style={styles.td}>{record.id}</td>
                <td style={styles.td}>{record.name}</td>
                <td style={styles.td}>{record.date}</td>
                <td style={styles.td}>{record.status}</td>
                <td style={styles.td}>
                  <img
                    src={sampleImages[record.name]}
                    alt={record.name}
                    style={styles.image}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={styles.pagination}>
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleChangePage(index + 1)}
              style={{
                ...styles.pageButton,
                ...(currentPage === index + 1 ? styles.activePageButton : {}),
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Attendance;
