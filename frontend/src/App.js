import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/authentication/screens/Login";
import Signup from "./features/authentication/screens/Signup";
import Navbar from "./core/components/Navbar";
import Home from "./features/home/screens/Home";

function App() {
  return (
    <div className="App h-screen w-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
