import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/App.scss";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyProcessPage from "./pages/MyProcessPage/MyProcessPage";
import BookingPage from "./pages/BookingPage/BookingPage";

function App() {
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <BrowserRouter>
      <Header contactRef={contactRef} projectsRef={projectsRef} />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage contactRef={contactRef} projectsRef={projectsRef} />
          }
        />
        <Route path="/my-process" element={<MyProcessPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
