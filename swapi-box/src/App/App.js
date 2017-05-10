import React, { Component } from 'react';
import './App.css';
import { Scroll } from './Components/Scroll/Scroll.js'
import { Button } from './Components/Button/Button.js'
import { Card } from './Components/Card/Card.js'
import { CardHolder } from './Components/CardHolder/CardHolder.js'
import { Favorites } from './Components/Favorites/Favorites.js'
import Cleaner from './helpers/Cleaner.js'

export default class App extends Component {
  constructor() {
    super()
    this.Cleaner = new Cleaner()
    this.state = {
      favorites: [],
      scroll: [],
      vehicles: [],
      people: [],
      trial: [],
      filmData: [],
      homeworld: [],
      planets: []
    }
  }

  fetchVehicles(){
    fetch('https://swapi.co/api/vehicles/')
    .then( (response) => response.json())
    .then( json => {
      json.results.map( result => {
        this.state.vehicles.push({
          name: result.name,
          model: result.model,
          class: result.vehicle_class,
          passengers: result.passengers
        }
        )
      })
    })
  }

  fetchPlanets() {
    fetch('https://swapi.co/api/planets/')
    .then( response => response.json())
    .then( json => {
      json.results.map( results => {
        let residentMap = results.residents.map( url => {
          return this.getPeople(url)
        })
        Promise.all( residentMap ).then( values => {
          let planetResidents = values.map( resident => {
            return resident.name
          })
          this.arrangingPlanetState( results, values, planetResidents )
          this.setState({
            planets: this.state.planets
          })
        })
      })
    })
  }

  arrangingPlanetState(results, values, planetResidents){
    let residentInfo = 'No Data Available'
    if(values.length){
      residentInfo = planetResidents.concat()
    }
    return this.state.planets.push({
      name: results.name,
      terrain: results.terrain,
      population: results.population,
      climate: results.climate,
      residents: residentInfo
    })
  }

  fetchPeople() {
    fetch('https://swapi.co/api/people/')
      .then( response  => response.json())
      .then( json => {
        this.setState({ people: json.results })
        json.results.map((result) => {
          let homeworld2 = this.getPeople(result.homeworld)
          let species2 = this.getPeople(result.species[0])

           Promise.all([homeworld2, species2]).then((values)=>{
                this.state.trial.push({
                 name2: result.name,
                 homeworld2: values[0].name,
                 species: values[1].name,
                 population2: values[0].population
                })
                this.setState({
                   trial: this.state.trial
                })
           })
         })
      })
  }

  getPeople(url) {
    return fetch(url)
      .then(response => response.json())
        .then(jsonResult => jsonResult)
  }


  componentWillMount(){
    this.fetchPeople()
    this.fetchVehicles()
    this.fetchPlanets()

    fetch('https://swapi.co/api/films')
      .then((response) => response.json())
      .then((json) => {
        const index = Math.floor((Math.random() * json.results.length))
        this.setState({ filmData: json.results[index] })
      })
  }


  render() {
    return (
      <div className="App">
        <Scroll scrollData={this.state.filmData}/>
        <CardHolder personData={this.state.people}
                    trial={this.state.trial}/>
      </div>
    );
  }
}
