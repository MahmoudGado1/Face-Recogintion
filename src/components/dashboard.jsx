import people from "../assets/people.png";
import Todo from "./Todo";

const Dashboard = () => {
  return (
    <main>
    <div className="head-title">
      <div className="left">
        <h1>Dashboard</h1>
        <ul className="breadcrumb">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <i className="bx bx-chevron-right"></i>
          </li>
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
        </ul>
      </div>
      <a href="#" className="btn-download">
        <i className="bx bxs-cloud-download"></i>
        <span className="text">Download PDF</span>
      </a>
    </div>
<ul className="box-info">
  <li>
    <i className='bx bxs-calendar-check' ></i>
    <span className="text">
      <h3>120</h3>
      <p>Total Employees</p>
    </span>
  </li>
  <li>
    <i className='bx bxs-group' ></i>
    <span className="text">
      <h3>100</h3>
      <p>Visitors</p>
    </span>
  </li>
  <li>
    <i className='bx bxs-dollar-circle' ></i>
    <span className="text">
      <h3>$2543</h3>
      <p>Total Sales</p>
    </span>
  </li>
</ul>


<div className="table-data">
  <div className="order">
    <div className="head">
      <h3>Market Zone</h3>
      <i className='bx bx-search' ></i>
      <i className='bx bx-filter' ></i>
    </div>
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Date Order</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={people}/>
            <p>John Doe</p>
          </td>
          <td>01-10-2021</td>
          <td><span className="status completed">Completed</span></td>
        </tr>
        <tr>
          <td>
            <img src={people}/>
            <p>John Doe</p>
          </td>
          <td>01-10-2021</td>
          <td><span className="status pending">Pending</span></td>
        </tr>
        <tr>
          <td>
            <img src={people}/>
            <p>John Doe</p>
          </td>
          <td>01-10-2021</td>
          <td><span className="status process">Process</span></td>
        </tr>
        <tr>
          <td>
            <img src={people}/>
            <p>John Doe</p>
          </td>
          <td>01-10-2021</td>
          <td><span className="status pending">Pending</span></td>
        </tr>
        <tr>
          <td>
            <img src={people}/>

            <p>John Doe</p>
          </td>
          <td>01-10-2021</td>
          <td><span className="status completed">Completed</span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <Todo/>
</div>
</main>

  );
}

export default Dashboard;
