function Movie(props) {
  
  console.log(props)
  return(
	  <ul>
	  	{props.movieTitle}
	  </ul>  	
	);  
} 

window.Movie = Movie;