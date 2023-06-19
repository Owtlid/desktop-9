import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Desktop from "./pages/desktop/Desktop";
import Login from "./pages/login/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Desktop />} path="/" exact />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>

      <ToastContainer autoClose={3000} position="top-center" />
    </div>
  );
}

export default App;
