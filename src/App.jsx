import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="home">
              <h1>Welcome to Login App</h1>
              <p>Please signup or login to continue</p>
            </div>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
