import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/App.scss";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DoggoPage from "./pages/DoggoPage/DoggoPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/forthedogs" element={<DoggoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
