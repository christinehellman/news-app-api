import React, { Component } from 'react';
import CardList from './components/Card/CardList';
import Form from './components/Form/Form';
import {API_KEY, fetchGetNews} from './fetch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }

 componentDidMount() {
   fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({ articles: data.articles }));
  }

  updateSource = ({ source }) => {
    fetchGetNews(`${source}`)
    .then(response => response.json())
    .then(({articles}) => {
      this.setState({articles})
    })
  }





  render() {
    const { articles } = this.state;
    return (
      <div className="App">
        <Form updateSource={this.updateSource} />
        <CardList articles={articles} />
        <small>Powered by <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">newsapi.org</a></small>
      </div>
    );
  }
}

export default App;