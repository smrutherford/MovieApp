const MovieList = (props) => {
  return(
	  <div>
	  	{props.movies.map((movie, i) => 
	  		<Movie 
	  		  key={i} 
	  		  movieTitle={movie.title} 
  		  />
  		)}
	  </div>  	
	);  

}; 
window.MovieList = MovieList;