import { Routes, Route } from "react-router-dom";
import './css/App.css';
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import NavBar from "./components/NavBar.jsx";
import { MovieProvider } from "./contexts/MovieContext.jsx"; // ./context/ is correct if folder name is exactly 'context'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
