import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyProcessPage from "./pages/MyProcessPage/MyProcessPage";
// import BookingPage from "./pages/BookingPage/BookingPage";

import "./sass/App.scss";

/**
 * Main App Component
 * @component
 */
function App() {
  // Refs for scroll management and component communication
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const headerHeight = 120;

  return (
    <BrowserRouter>
      <Header contactRef={contactRef} projectsRef={projectsRef} />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              contactRef={contactRef}
              projectsRef={projectsRef}
              headerHeight={headerHeight}
            />
          }
        />
        <Route
          path="/my-process"
          element={<MyProcessPage headerHeight={headerHeight} />}
        />
        {/* Booking Page to be built soon */}
        {/* <Route
          path="/booking"
          element={<BookingPage headerHeight={headerHeight} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
