function Movie(props) {
  
  console.log(props)
  return(
	  <ul className="movieTitle">
	  	{props.movieTitle}
	  </ul>  	
	);  
} 

window.Movie = Movie;