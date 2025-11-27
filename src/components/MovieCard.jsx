import '../css/MovieCard.css'

import { useMovieContext } from "../contexts/MovieContext.jsx";
function  MovieCard({movie}) {
    const { addFavorites, removeFavorites, isFavorites } = useMovieContext();
    const favorite=isFavorites(movie.id);

    function  onfavorite(e) {

        e.preventDefault()
        if(favorite)removeFavorites(movie.id)

    
    else { addFavorites(movie)}};
    
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay" >
                    <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onfavorite}>♥</button>
                </div>
            </div>
            <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            </div>
        </div>
    );
    
}
export default MovieCard;