import React, { Component } from 'react';
import { API_KEY } from '../../fetch';
import SelectBox from './SelectBox';
import Button from './Button';
import './Form.css'

//https://codesandbox.io/embed/x8omy0p9z

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      source: ""
    }
    
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/sources?country=us&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({ sources: data.sources }))
  }

  onChange = event => { 
    const name = event.target.name;
    const value = event.target.value;
    this.setState({source:value});
    console.log(name, value);  
  }

  handleSubmit = event => {
    event.preventDefault();
    const {source} = this.state;
    this.props.updateSource({source});
  }
 
  render() {
    const { sources, source} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <SelectBox 
          value={source}
          onChange={this.onChange} 
          options={sources} 
          placeholder="Select a news source and view today's top headlines"
        />

        <Button 
          type={"primary"}
          title={"Search"}
          disabled={!source}
  
        />
      </form>
    )
  }
}



export default Form;