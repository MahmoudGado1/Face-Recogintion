/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import people from "../assets/people.png";

const Navbar = ({ toggleSidebar, onSearch }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);

  const notifications = [
    "New user registered",
    "Server maintenance scheduled",
    "System update completed",
    "Your profile was updated",
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchQuery.trim());
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowProfileCard(false); // Close profile card if open
  };

  const toggleProfileCard = () => {
    setShowProfileCard(!showProfileCard);
    setShowNotifications(false); // Close notifications if open
  };

  const styles = {
    dropdownCard: {
      position: "absolute",
      top: "50px",
      right: "10px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "8px",
      width: "200px",
      padding: "10px",
      zIndex: 1000,
    },
    dropdownHeader: {
      margin: "0 0 10px",
      fontSize: "16px",
      color: "#333",
      textAlign: "center",
    },
    dropdownList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    dropdownListItem: {
      margin: "5px 0",
    },
    dropdownLink: {
      textDecoration: "none",
      color: "#007bff",
      fontSize: "14px",
    },
    wrapper: {
      position: "relative",
    },
  };

  return (
    <header>
      {location.pathname.includes("/login") ||
      location.pathname.includes("/register") ? null : (
        <nav>
          <i className="bx bx-menu" onClick={toggleSidebar}></i>
          <a href="#" className="nav-link">
            Categories
          </a>
          <form onSubmit={handleSearch}>
            <div className="form-input">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">
                <i className="bx bx-search"></i>
              </button>
            </div>
          </form>
          <ul className="side-menu">
            <li>
              <Link to="/login" className="login">
                <i className="bx bxs-log-in-circle"></i>
                <span className="text">Login</span>
              </Link>
            </li>
          </ul>
          <div style={styles.wrapper}>
            <a
              href="#"
              className="notification"
              onClick={toggleNotifications}
              title="Notifications"
            >
              <i className="bx bxs-bell"></i>
              <span className="num">{notifications.length}</span>
            </a>
            {showNotifications && (
              <div style={styles.dropdownCard}>
                <h4 style={styles.dropdownHeader}>Notifications</h4>
                <ul style={styles.dropdownList}>
                  {notifications.map((note, index) => (
                    <li key={index} style={styles.dropdownListItem}>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div style={styles.wrapper}>
            <a
              href="#"
              className="profile"
              onClick={toggleProfileCard}
              title="Profile"
            >
              <img src={people} alt="Profile" />
            </a>
            {showProfileCard && (
              <div style={styles.dropdownCard}>
                <h4 style={styles.dropdownHeader}>Profile</h4>
                <ul style={styles.dropdownList}>
                  <li style={styles.dropdownListItem}>
                    <Link to="/profile" style={styles.dropdownLink}>
                      View Profile
                    </Link>
                  </li>
                  <li style={styles.dropdownListItem}>
                    <Link to="/settings" style={styles.dropdownLink}>
                      Settings
                    </Link>
                  </li>
                  <li style={styles.dropdownListItem}>
                    <Link to="/logout" style={styles.dropdownLink}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
