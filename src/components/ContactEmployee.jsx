import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ContactEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate fetching employee data (replace with real API call)
    const fetchEmployees = () => {
      setEmployees([
        { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890", position: "Software Engineer" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210", position: "Product Manager" },
        { id: 3, name: "Samuel Green", email: "samuel.green@example.com", phone: "456-789-1234", position: "UX Designer" },
        { id: 4, name: "Emily Brown", email: "emily.brown@example.com", phone: "321-654-9870", position: "HR Specialist" },
      ]);
    };

    fetchEmployees();
  }, []);

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
    search: {
      marginBottom: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    searchInput: {
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #ddd",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    tableHeader: {
      backgroundColor: "#f4f4f4",
      borderBottom: "2px solid #ddd",
    },
    tableRow: {
      borderBottom: "1px solid #ddd",
    },
    tableCell: {
      padding: "10px",
      textAlign: "left",
    },
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Contact Employees</h1>
          <ul className="breadcrumb">
            <li>
              <Link to={"/"}>Dashboard</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <Link className="active" to={"/contact"}>
                Contact Employees
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.search}>
          <input
            type="text"
            placeholder="Search employee by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableCell}>Name</th>
              <th style={styles.tableCell}>Email</th>
              <th style={styles.tableCell}>Phone</th>
              <th style={styles.tableCell}>Position</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <tr key={employee.id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{employee.name}</td>
                  <td style={styles.tableCell}>{employee.email}</td>
                  <td style={styles.tableCell}>{employee.phone}</td>
                  <td style={styles.tableCell}>{employee.position}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={styles.tableCell}>
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ContactEmployee;
