import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/authentication/screens/Login";
import Signup from "./features/authentication/screens/Signup";
import Home from "./features/home/screens/Home";
import GlobalOutlet from "./core/outlet/GlobalOutlet";
import Movies from "./features/movies/screens/Movies";
import Review from "./features/movies/Review";
import Contact from "./features/movies/screens/contact";

function App() {
  return (
    <div className="App h-screen w-screen">
      <Router>
        <Routes>
          <Route element={<GlobalOutlet />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/review" element={<Review />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movies" element={<Movies />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
