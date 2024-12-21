import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";




const RegisterPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nic: "",
    dob: "",
    gender: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault(); // Prevent form submission
    setStep((prev) => prev + 1);
  };

  const handleBack = (e) => {
    e.preventDefault(); // Prevent form submission
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Navigate to the login page after successful submission
    navigate("/login");
  };

  return (
    <div className="page-container">
      <div className="left-section">
      <Link to={"/"} className="brand brand-login">

<i className="bx bxs-smile"></i>
<span className="text">Admin</span>
</Link>
        <div>
          <h1>Create Your Account</h1>
          <p>Sign up to get access to exclusive features and updates.</p>
        </div>
      </div>

      <div className="right-section">
      <Link to={"/"} className="a1 brand brand-login">

<i className="bx bxs-smile"></i>
<span className="text">Admin</span>
</Link>
        <div className="register-container">
          <h2>Sign Up</h2>
          <p>Please Register To Continue</p>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </>
            )}
            {step === 2 && (
              <>
                
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </>
            )}

            <div className="link-container">
              <p>Already Registered?</p>
              <Link to={"/login"}>Login Now</Link>
            </div>
            <div className="button-container">
              {step > 1 && (
                <button
                  type="button" // Prevent form submission for this button
                  className="btn-outline-primary"
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              {step < 2 ? (
                <button
                  type="button" // Prevent form submission for this button
                  className="btn-primary"
                  onClick={handleNext}
                >
                  Next
                </button>
              ) : (
                <button type="submit" className="btn-primary" >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

