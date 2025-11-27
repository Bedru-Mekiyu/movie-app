import MovieCard from "../components/MovieCard.jsx";
import NavBar from "../components/NavBar.jsx";
import { getPopularMovies, searchPopularMovies } from "../services/api";
import "../css/Home.css";

import { useState, useEffect } from "react";
function Home() {
  const [searchQuary, setSearchQuary] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("something want worng seach the console.....");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
    // searchPopularMovies()
  }, []);

  const handleSearch = async(e) => {
    e.preventDefault();
    if(!searchQuary.trim())return;
    if(loading)return;
    
     setLoading(true);
        try {
          const popularMovies = await searchPopularMovies(searchQuary);
          setMovies(popularMovies);
          setError(null)
        } catch (error) {
          console.log(error);
          setError("faild to fetch the movies");
        } finally {
          setLoading(false);
        }
      
 
  };
  return (
    <div className="home">
      <form action="" className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="type your movie name...."
          value={searchQuary}
          onChange={(e) => setSearchQuary(e.target.value)}
        />
        <button className="search-button" type="submit" >
          search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading"> loading....</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
