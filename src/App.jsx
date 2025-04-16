import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs/Blogs";
import Alumni from "./pages/Members/Alumni";
import Club from "./pages/Members/Club";
import EventMain from "./pages/Events/EventMain";
import EventTemplate from "./pages/Events/EventTemplate";
import Smp from "./pages/SMP/Smp";
import MagazineViewer from "./pages/Magazines/MagazineViewer";
import ProjectExpo from "./pages/ProjectExpo/ProjectExpo";
import AboutUs from "./pages/AboutUs/AboutUs";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const redirect = sessionStorage.redirect;
    if (redirect) {
      sessionStorage.removeItem("redirect");
      window.history.replaceState(null, "", redirect);
    }
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/blog" element={<Blogs />} />

        <Route
          exact
          path="/project-expo/:expoPeriod"
          element={<ProjectExpo />}
        />
        <Route
          exact
          path="/magazine/:magazinePeriod"
          element={<MagazineViewer />}
        />

        <Route exact path="/alumni" element={<Alumni />} />
        <Route exact path="/team" element={<Club />} />

        <Route path="/events" element={<EventMain />} />
        <Route path="/events/:eventLink" element={<EventTemplate />} />

        <Route exact path="/smp" element={<Smp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
