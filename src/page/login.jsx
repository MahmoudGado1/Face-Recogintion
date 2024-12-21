import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
    console.log(email, password, confirmPassword);
  };

  return (
    <>
      <div className="page-container">
        {/* Left Section */}
        <div className="left-section">
          <Link to={"/"} className="brand brand-login">

          <i className="bx bxs-smile"></i>
          <span className="text">Admin</span>
          </Link>
          <div>
            <h1>Welcome Back!</h1>
            <p>Log in to access your account and explore more features.</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <Link className="a1 brand brand-login" to={"/"}>
          <i className="bx bxs-smile"></i>
          <span className="text">Admin</span>
          </Link>
          <div className="login-container">
            <h2>Sign In</h2>
            <p>Please Login To Continue</p>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="link-container">
                <p>Not Registered?</p>
                <Link to={"/register"}>Register Now</Link>
              </div>
              <div className="button-container">
                <button type="submit" className="btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
