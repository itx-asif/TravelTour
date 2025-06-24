import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Tour from "./Pages/Tour.jsx";
import Contact from "./Pages/Contact.jsx";

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
