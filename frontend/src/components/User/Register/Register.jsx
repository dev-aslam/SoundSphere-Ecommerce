import "./Register.css";
import Header from "../Shared/Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userRegister } from "../../../api/services/User/authUser";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    const { name, email, phoneNumber, password, confirmPassword } = formData;
    if (!name.trim()) {
      formErrors.name = "Name is required.";
    }
    if (/\d/.test(name)) {
      formErrors.name = "Name cannot contain numbers.";
    }
    if (!email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid.";
    }
    if (!phoneNumber.trim()) {
      formErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      formErrors.phoneNumber = "Phone number must be exactly 10 digits.";
    }
    if (!password.trim()) {
      formErrors.password = "Password is required.";
    }
    if (!confirmPassword.trim()) {
      formErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }
    if (!document.getElementById("terms").checked) {
      formErrors.terms = "You must agree to the terms and conditions.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await userRegister(formData);
        if (response) {
          navigate("/otp-Verify");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="w-[400px] px-4 py-10 flex flex-col items-center justify-center gap-10">
          <AccountCircleIcon fontSize="large" sx={{ width: 50, height: 50 }} />
          <h1 className="uppercase text-lg font-semibold">Create Account</h1>
          <div className="form w-full">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="form-item w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="name">Name</label>
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="form-item w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="email">Email</label>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="form-item w-full">
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="phoneNumber">PhoneNumber Number</label>
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber}</p>
                )}
              </div>
              <div className="form-item">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="password">Password</label>
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>
              <div className="form-item">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                {errors.confirmPassword && (
                  <p className="text-red-500">{errors.confirmPassword}</p>
                )}
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" name="terms" id="terms" />
                  <label htmlFor="terms" className="text-base">
                    I agree to the{" "}
                    <span className="text-blue-400 cursor-pointer">
                      terms and condition
                    </span>
                  </label>
                </div>
                {errors.terms && <p className="text-red-500">{errors.terms}</p>}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded bg-black border-black border transition-colors text-white w-full max-w-[70%] h-10 hover:text-black hover:bg-white">
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flex justify-center mt-4 gap-2">
              <p className="text-[#6b6b6b]">Already have an Account?</p>
              <Link to={"/login"} className="font-semibold text-blue-500">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
