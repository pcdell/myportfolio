import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Contact from './pages/Contact';
import ScrollToTop from './helpers/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/myportfolio" element={<Home />} />
          <Route path="/myportfolio/projects" element={<Projects />} />
          <Route path="/myportfolio/project/:id" element={<ProjectDisplay />} />
          <Route path="/myportfolio/experience" element={<Experience />} />
          <Route path="/myportfolio/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;