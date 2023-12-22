import { useState } from "react";
import './assets/bootstrap.min.css'
import './assets/bootstrap.bundle.min.js'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer.jsx";
import GameDetails from "./pages/GameDetails.jsx";
import NewsDetails from "./pages/NewsDetails.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/detail/:id" element={<GameDetails />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
