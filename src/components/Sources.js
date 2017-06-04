import React from 'react';

class Sources extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      sources: [],
      value: this.props.sourceID
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  	fetch(`https://newsapi.org/v1/sources`, {
			method: 'get'
		})
		.then(response => response.json())
		.then(json => {
			this.setState({sources: json.sources});
		})
		.catch(function(error) {
			console.log(error);
		});
  }

  handleChange(event) {
  	this.setState({value: event.target.value});
  	this.props.source([
  		event.target.options[event.target.selectedIndex].text,
  		event.target.value
  	]);
  }

  render() {
    return (
    	<div className="col-12 form-inline">
    		<label>Select news source: </label>
	      <select
	      	className="form-control sources"
	      	onChange={this.handleChange}
	        value={this.state.value}
	      >
	      {
	      	this.state.sources.map(source =>
	      		<option key={source.id} value={source.id}>
	      			{source.name}
	      		</option>
	      	)
	      }
	      </select>
		  </div>
    );
  }

}

export default Sources;