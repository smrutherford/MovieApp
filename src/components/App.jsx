// import React from "react"; // webpack functionality, but JS commands
// import ReactDOM from "react-dom";
// need to wrap each react component in element tag

function App(props) {
	return (
		<div> 
			<h2>MovieList</h2>
			<br/>
			<input type="text" placeholder="Search.." />
			<button type="search">Go!</button>
			<br/>
			<br/>
			<div className="movies">
				<MovieList movies={props.movies} />
			</div>
		</div>
	)
}

window.App = App;