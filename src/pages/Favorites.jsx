import '../css/Favorites.css';
import MovieCard from "../components/MovieCard.jsx";

import { useMovieContext } from "../contexts/MovieContext.jsx";
function  Favorites() {
    const{favorites}=useMovieContext()
    if (favorites){
        
        return   <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    }
    return(
    
        <div className="favorites-empty">
            <h3>no favorite movies yet</h3>
            <p>start adding your favorite movies her and there will appear</p>
        </div>
    );
}
export default Favorites;