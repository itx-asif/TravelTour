import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/travel/Home.jsx";
import About from "./pages/travel/About.jsx";
import Tour from "./pages/travel/Tour.jsx";
import Contact from "./pages/travel/Contact.jsx";
import Project from "./pages/Project.jsx";
import WeatherApp from "./pages/Weather.jsx";
import FoodRecipeApp from "./pages/Recipes/component/FoodRecipeApp.jsx";
import RecipeDetail from "./pages/Recipes/component/RecipeDetail.jsx";
import FavoritesPage from "./pages/Recipes/component/FavoritesPage.jsx";
import MainHome from "./pages/MainHome.jsx";
import ExpanseHome from "./pages/expanse/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome/>} />
        <Route path="/travel" element={<Home/> }/>
          <Route path="/travel/about" element={<About />} />
          <Route path="/travel/tours" element={<Tour/>} />
          <Route path="/travel/Contact" element={<Contact/>} />
        
            <Route path="/project" element={<Project/>} />
          <Route path="/weather" element={<WeatherApp/>} />
        <Route path="/food" element={<FoodRecipeApp />} />
        <Route path="/food/recipe/:id" element={<RecipeDetail />} />
        <Route path="/food/Favorite" element={<FavoritesPage/>}/>
        <Route path="/expanse/" element={<ExpanseHome />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
