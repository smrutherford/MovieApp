class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			allMovies: [],
			watchedMovies: [],
			toWatch: []
		};

		this.getSearchResults = this.getSearchResults.bind(this);
		this.getAllMovies = this.getAllMovies.bind(this);	
		this.addMovieToList = this.addMovieToList.bind(this);
		this.addWatchedMovies = this.addWatchedMovies.bind(this);
		this.removeFromWatchedMovies = this.removeFromWatchedMovies.bind(this);
		this.getWatchedMovies = this.getWatchedMovies.bind(this);
		this.getMoviesToWatch = this.getMoviesToWatch.bind(this);
	}

	getSearchResults(query) {
		let foundMovies = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
		}); 
		if (foundMovies.length === 0) {
			this.setState({movies: [{title: 'No results..'}]});
		} else {
			this.setState({movies: foundMovies});
		}
	}

	getAllMovies() {
		this.setState({movies: this.state.allMovies})
	}

	addMovieToList(input) {
		let movies = this.state.movies.concat({title: input});
		this.state.allMovies = movies;
		this.setState({movies: movies});
	}

	addWatchedMovies(movie) {
		this.state.watchedMovies.push(movie);
		this.updateToWatch();
	}

	removeFromWatchedMovies(movie) {
		let index = this.state.watchedMovies.indexOf(movie);
		this.state.watchedMovies.splice(index, 1);
		this.updateToWatch();
	}

	updateToWatch() {
		this.state.toWatch = this.state.allMovies.filter((movie) => {
			return !this.state.watchedMovies.includes(movie);
		});
	}

	getWatchedMovies() {
		this.setState({movies: this.state.watchedMovies});
	}

	getMoviesToWatch() {
		this.setState({movies: this.state.toWatch});
	}

	render() {
		return (
			<div className="app"> 
			  <img src="src/MoviePopcorn.jpg" alt="MoviePopcorn" />
				<h2>MovieList</h2>
				<button 
					className="home"
				  onClick={this.getAllMovies}
				>Home</button>
				<br/>
				<br/>
				<Input handleInput={this.addMovieToList} />
				<br/>
				<div>
					<button
					  onClick={this.getWatchedMovies}
					>Watched</button>
					<button
					  onClick={this.getMoviesToWatch}
					>To Watch</button>
					<Search handleSearch={this.getSearchResults} />
				</div>
				<div className="movie-container">
					<MovieList 
					  movies={this.state.movies} 
					  handleWatched={this.addWatchedMovies}
					  removeFromWatched={this.removeFromWatchedMovies}
				  />
				</div>
			</div>
		)		
	}
}

window.App = App;