import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Login from './Login';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
