import React, { Component } from 'react';
import News from './components/News';
import Sources from './components/Sources';
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      source: ['ABC News (AU)', 'abc-news-au']
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(source) {
    this.setState({source});
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header row">
          <h1 className="col-12">Latest news from &ndash; {this.state.source[0]}</h1>
          <Sources className="col-6" sourceID={this.state.source[1]} source={this.handleChange} />
        </div>
        <hr/>
        <News source={this.state.source[1]}/>
        <p>powered by <a href="https://newsapi.org/" target="blank">NewsAPI.org</a></p>
      </div>
    );
  }
}

export default App;