/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({isSidebarHidden}) => {
    const [activeIndex, setActiveIndex] = useState(0);
  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("/login") ||
      location.pathname.includes("/register") ? null : (
      <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">Admin</span>
        </a>
        <ul className="side-menu top">
          {[
            { name: "Dashboard", icon: "bxs-dashboard", link: "/" },
            { name: "Face Recognition", icon: "bxs-group",link:"/face-recognition" },
            { name: "Attendance Data", icon: "bxs-shopping-bag-alt",link:"/attendance" },
            { name: "Analytics", icon: "bxs-doughnut-chart" ,link:"/analytics"},
            { name: "Contact Employees", icon: "bxs-message-dots" ,link:"/contact"}
          ].map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleMenuClick(index)}
            >
              <Link to={item.link}>
                <i className={`bx ${item.icon}`}></i>
                <span className="text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>


        {/* <ul className="side-menu">
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul> */}
      </section>
      )}
    </>
  );
}

export default Sidebar;
