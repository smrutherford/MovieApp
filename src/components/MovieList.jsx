const MovieList = (props) => {
  return(
	  <div>
	  	{props.movies.map((movie, i) => 
	  		<Movie 
	  		  key={i} 
	  		  movie={movie} 
	  		  handleWatched={props.handleWatched}
	  		  removeFromWatched={props.removeFromWatched}
  		  />
  		)}
	  </div>  	
	);  

}; 
window.MovieList = MovieList;