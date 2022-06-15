import React, { Component } from "react";
import List from './List';

class Search extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: "",
      areas: []
    };
  }

  handleChange(event) {
      let name  = event.target.value
      this.setState({name: name})
      let reg = new RegExp (name , 'i')
        if (event.target.value.length === 0) { 
          let areas = []
          this.setState({areas: areas})
        } else {
          let areas = this.state.places.filter(x =>
            x.city.match(reg) || x.state.match(reg)).map(x => x.city + " - " + x.state)  
          this.setState({areas: areas})
        }
    }
  
  handleSubmit(event) {
    console.log(this.state.value)
    event.preventDefault()
  }


  render() {
        return (
          <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input type = "text" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
            </form>
            <List value = {this.state.areas}/>
          </div>
        )
      }

  

  /* DO NOT MODIFY */
  componentDidMount() {
    const allPlaces = [];
    const endpoint =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    fetch(endpoint)
      .then(data => data.json())
      .then(results => {
        allPlaces.push(...results)
        this.setState({ places: allPlaces })
      })
      .catch(error => console.log(error));
  }
}

export default Search