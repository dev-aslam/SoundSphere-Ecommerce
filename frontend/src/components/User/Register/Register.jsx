import "./Register.css";
import Header from "../Shared/Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Register = () => {
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
            <form className="flex flex-col gap-6">
              <div className="form-item w-full">
                <input type="text" id="name" name="name" className="w-full" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-item w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-item w-full">
                <input type="text" id="phone" name="phone" className="w-full" />
                <label htmlFor="phone">Phone Number</label>
              </div>
              <div className="form-item">
                <input type="password" id="password" name="password" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-item">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="text-base">
                  I agree to the{" "}
                  <span className="text-blue-400 cursor-pointer">
                    terms and condition
                  </span>
                </label>
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
              <Link to={"/resgister"} className="font-semibold text-blue-500">
                {" "}
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
