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

  // getPeople(url, state, key) {
  //   // console.log(url)
  //   fetch(url).then((response) => {
  //     // console.log('response ', response)
  //     return response.json()
  //   }).then(jsonResult => {
  //     // console.log('result ', jsonResult)
  //     this.setState({ [state]: jsonResult[[key]] })})
  // }

  componentDidMount(){
    console.log('card ', this.props)
    // this.setState({ name: this.props.personData.name,
    //                 homeworld: this.getPeople(this.props.personData.homeworld, 'homeworld', 'name'),
    //                 species: this.getPeople(this.props.personData.species[0], 'species', 'name'),
    //                 population: this.getPeople(this.props.personData.homeworld, 'population', 'population'),
    //               })
  }

  results(){
      return(
        <div>
          <div>Name: {this.props.name}</div>
          <div>Species: {this.props.species}</div>
          <div>Homeworld: {this.props.homeworld}</div>
          <div>Population: {this.props.population}</div>
        </div>
      )
  }

  render(){
    return(
      <section>
        {this.results()}
      </section>
    )
  }
}
