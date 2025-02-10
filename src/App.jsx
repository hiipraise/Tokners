import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import BlurBg from "./assets/image/blurbg";
import Home from "./pages/home/home";
import Team from "./pages/team/team";
import Token from "./pages/token/token";
import Article from "./pages/article/article";

function App() {
  return (
    <Router>
      <BlurBg />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Home route */}
        <Route path="/team" element={<Team />} /> {/* ✅ Correct path */}
        <Route path="/token" element={<Token />} /> {/* ✅ Correct path */}
        <Route path="/article" element={<Article />} /> {/* ✅ Correct path */}
      </Routes>
    </Router>
  );
}

export default App;
