import Header from "../Shared/Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="w-[400px] px-4 py-10 flex flex-col items-center justify-center gap-10">
          <AccountCircleIcon fontSize="large" sx={{ width: 50, height: 50 }} />
          <h1 className="uppercase text-lg font-semibold">
            Login to your Account
          </h1>
          <div className="form w-full">
            <form className="flex flex-col gap-6">
              <div className="form-item w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-item">
                <input type="password" id="password" name="password" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Rememeber me</label>
                </div>
                <div className="cursor-pointer hover:text-blue-400">
                  <p>Forgot Password?</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded bg-black border-black border transition-colors text-white w-full max-w-[70%] h-10 hover:text-black hover:bg-white">
                  Login
                </button>
              </div>
            </form>

            <div className="flex justify-center mt-4 gap-2">
              <p className="text-[#6b6b6b]">Dont have an account?</p>
              <Link to={"/resgister"} className="font-semibold text-blue-500">
                {" "}
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
