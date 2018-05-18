function MovieList(props) {
  return(
	  <div>
	  	{props.movies.map((movie) => 
	  		<Movie movieTitle={movie.title} />
  		)}
	  </div>  	
	);  

} 


window.MovieList = MovieList;