import { useState, useEffect } from "react";
import { authAdmin } from "../../../services/Admin/login.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../../features/authSlice.js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatach = useDispatch();

  const { userInfo } = useSelector((state) => state.authAdmin);

  useEffect(() => {
    if (userInfo) {
      navigate("/admin/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await authAdmin(formData);
      dispatach(setCredentials({ ...response }));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex justify-center w-[450px] p-6 flex-col">
        <h1 className="text-4xl font-semibold mb-8 text-center">Admin Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-start flex-col mb-4">
            <label htmlFor="email" className="text-base font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-[#EBEAEA] h-[40px] rounded border-none px-3"
            />
          </div>
          <div className="flex justify-center items-start flex-col mb-8">
            <label htmlFor="password" className="text-base font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full bg-[#EBEAEA] h-[40px] rounded border-none px-3"
            />
          </div>
          <div className="flex justify-center items-start">
            <button
              type="submit"
              className="bg-black text-white w-[150px] py-2 border rounded text-xl hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
