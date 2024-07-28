import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Routes, Route } from "react-router-dom";

import AdminWrapper from "./pages/AdminWrapper";

import Layout from "./components/User/Shared/Layout";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="admin/*" element={<AdminWrapper />} />
      <Route path="/*" element={<Register />} />
    </Routes>
  );
}

export default App;
