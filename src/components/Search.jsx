class Search extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		value: ''
  	};

  	this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleChange(e) {
  	this.setState({value: e.target.value});
  }

  handleSubmit(e) {
  	e.preventDefault(); // why do we need prevent default?
  	this.setState({value: ''});
  	this.props.handleSearch(e.target[0].value);
  }

  render () {
	  return (	
		  <div className="search">	  
			  <form onSubmit={this.handleSubmit}>
					<input 
					  type="text" 
					  value={this.state.value}
					  placeholder="Search.." 
					  onChange={this.handleChange}
				  />
					<button type="search">Go!</button>
				</form>
			</div>
	  );  	
  }

}

window.Search = Search;
