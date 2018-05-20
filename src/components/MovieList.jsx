const MovieList = (props) => {
	console.log('movieList props: ', props.movies);
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