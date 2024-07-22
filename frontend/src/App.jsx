import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Routes, Route } from "react-router-dom";

import AdminWrapper from "./pages/AdminWrapper";

function App() {
  return (
    <Routes>
      <Route path="admin/*" element={<AdminWrapper />} />
    </Routes>
  );
}

export default App;
