// import React from "react"; // webpack functionality, but JS commands
// import ReactDOM from "react-dom";
// need to wrap each react component in element tag

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			movies: props.movies
		};

		this.getSearchResults = this.getSearchResults.bind(this);
		this.getAllMovies = this.getAllMovies.bind(this);	
	}

	getSearchResults(query) {
		let foundMovies = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
		}); 
		if (foundMovies.length == 0) {
			this.setState({movies: [{title: 'No results..'}]});
		} else {
			this.setState({movies: foundMovies});
		}
	}

	getAllMovies() {
		this.setState({movies: this.props.movies})
	}

	render() {
		return (
			<div className="app"> 
				<h2>MovieList</h2>
				<button 
					className="home"
				  onClick={this.getAllMovies}
				>Home</button>
				<br/>
				<br/>
				<Search handleSearch={this.getSearchResults} />
				<br/>
				<div className="movies">
					<MovieList movies={this.state.movies} />
				</div>
			</div>
		)		
	}
}

window.App = App;