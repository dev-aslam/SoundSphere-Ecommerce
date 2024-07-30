import Header from "../Shared/Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../api/services/User/authUser";
import { setUserCredentials } from "../../../features/authUserSlice";
import "./Login.css";
import OAuth from "./OAuth/OAuth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.authUser);

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.isVerified);
      if (userInfo.isVerified) {
        navigate("/");
      } else {
        navigate("/otp-verify");
      }
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await userLogin(formData);
      dispatch(setUserCredentials({ ...response }));
      console.log(response.isVerified);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="sticky top-0 w-full">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="w-[400px] px-4 py-10 flex flex-col items-center justify-center gap-10">
          <AccountCircleIcon fontSize="large" sx={{ width: 50, height: 50 }} />
          <h1 className="uppercase text-lg font-semibold">
            Login to your Account
          </h1>
          <div className="form w-full">
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}>
              {error && <p className="text-red-500">{error}</p>}
              <div className="form-item w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder=" "
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-item">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder=" "
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember me</label>
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
              <div>
                <div className="flex justify-center gap-2">
                  <p className="text-[#6b6b6b]">Dont have an account?</p>
                  <Link
                    to={"/register"}
                    className="font-semibold text-blue-500">
                    Sign Up
                  </Link>
                </div>
                <br />
                <hr />
                <br />
                <div className="flex justify-center">
                  <OAuth />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
