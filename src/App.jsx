import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import BlurBg from "./assets/image/blurbg";
import Home from "./pages/home/home";
import Team from "./pages/team/team";
import Token from "./pages/token/token";
import Article from "./pages/article/article";
import Footer from "./components/footer/footer";
import Auth from "./pages/auth/auth";

function App() {
  return (
    <Router>
      <BlurBg />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/token" element={<Token />} />
        <Route path="/article" element={<Article />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
