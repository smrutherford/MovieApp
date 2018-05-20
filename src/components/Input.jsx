class Input extends React.Component {
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
  	this.props.handleInput(e.target[0].value);
  }

  render () {
  	return (
		  <div>
			  <form onSubmit={this.handleSubmit}>
					<input 
					  type="text" 
					  value={this.state.value}
					  placeholder="Add movie title here.." 
					  onChange={this.handleChange}
				  />
					<button type="submit">Add</button>
				</form>
		  </div>
		);
  }

}

window.Input = Input;