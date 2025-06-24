import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Tour from "./pages/Tour.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }/>
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tour/>} />
          <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
