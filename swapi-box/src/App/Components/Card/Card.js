import React, { Component } from 'react'

export class Card extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      homeworld: '',
      species: '',
      population: '',
    }
  }

  getPeople(url, state, key) {
    console.log(url)
    fetch(url).then((response) => {
      console.log('response ', response)
      return response.json()
    }).then(jsonResult => {
      console.log('result ', jsonResult)
      this.setState({ [state]: jsonResult[[key]] })})
  }

  componentDidMount(){
    // console.log(this.props.personData.homeworld, ' homeworld')
    // console.log(this.props.personData.species[0], ' species')
    // console.log(this.props.personData.homeworld, ' homeworld')
    this.setState({ name: this.props.personData.name,
                    homeworld: this.getPeople(this.props.personData.homeworld, 'homeworld', 'name'),
                    species: this.getPeople(this.props.personData.species[0], 'species', 'name'),
                    population: this.getPeople(this.props.personData.homeworld, 'population', 'population'),
                  })
  }

  render(){
    return(
      //<div>he</div>
      <div>
        <div>Name: {this.state.name}</div>
        <div>Species: {this.state.species}</div>
        <div>Homeworld: {this.state.homeworld}</div>
        <div>Population: {this.state.population}</div>
      </div>
    )
  }
}
