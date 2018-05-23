class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false
    }
    // console.log(this.props.movie.title, this.state.watched);

  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // if user is switching watched from false to true, add to watched movies
    if (this.state.watched === false) {
      this.props.handleWatched(this.props.movie);
    } else {
      this.props.removeFromWatched(this.props.movie);
    }
  	this.setState({watched: !this.state.watched});
    console.log('handleClick: ', this.props.movie.title, this.state.watched);

  }

  render() {
    {console.log(this.props.movie.title, this.state.watched)}
  	let style = {
  		backgroundColor: this.state.watched ? '#EDB21E' : '#F7FFF6'
  	};

  	return (
	  	<div id="movie-row">
			  <span 
			    className="movie-title"
		    >{this.props.movie.title}</span>
			  <button 
			    className="watch"
			    style = {style}
			    onClick={this.handleClick}
		    >Watched</button>
		  </div>  	
		);  
	}
} 

window.Movie = Movie;  