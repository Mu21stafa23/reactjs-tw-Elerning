import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage'; 
import LoginPage from './Components/LoginPage/LoginPage';
import Contact from './Components/Contact/Contact '
import About from './Components/About/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />


      </Routes>
    </Router>
  );
}

export default App;
