import React from 'react';

class News extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      news: [],
      source: this.props.source
    };
    this.getNews = this.getNews.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  	this.setState({source: nextProps.source});
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.source !== this.state.source) {
      this.getNews();
    }
  }

  componentDidMount() {
  	this.getNews();
  }

  getNews() {
  	fetch(`getnewsdata.php?source=${this.state.source}`, {
			method: 'get'
		})
		.then(response => response.json())
		.then(json => {
			this.setState({
        news: json.articles
      });
		})
		.catch(function(error) {
			console.log(error);
		});
  }

  newsGridSize(index) {
    let classNames = "";
    switch(index) {
      case 0:
        classNames = 'news-single col-12';
      break;
      case 1:
      case 2:
        classNames = 'news-single col-xs-12 col-sm-6';
      break;
      default:
        classNames = 'news-single col-xs-12 col-sm-6 col-lg-4';
      break;
    }
    return classNames;
  }

  render() {
    return (
      <div className="news row">
      {
      	this.state.news.map((singleNews, index) =>
          <div className={this.newsGridSize(index)} key={index}>
  	      	<div className="card">
  	      		<img className="card-img-top" src={singleNews.urlToImage} alt="" />
  	      		<div className="card-block">
  		      		<h4 className="card-title">{singleNews.title}</h4>
  		      		<p className="card-text">{singleNews.description}</p>
  		      		<a href={singleNews.url} className="btn btn-outline-secondary" target="blank">Read more</a>
  		      	</div>
  	      	</div>
          </div>
	      )
    	}
      </div>
    );
  }

}

export default News;