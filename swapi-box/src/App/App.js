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
      filmData: {},
      selected: '',
      favorites: [],
      vehicles: [],
      people: [],
      peopleAtrributes: [],
      homeworld: [],
      planets: []
    }
  }

  fetchVehicles() {
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
                this.state.peopleAtrributes.push({
                 name2: result.name,
                 homeworld2: values[0].name,
                 species: values[1].name,
                 population2: values[0].population
                })
                this.setState({
                   peopleAtrributes: this.state.peopleAtrributes
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

  fetchFilms() {
    return fetch('https://swapi.co/api/films')
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.results)
        // const index = Math.floor((Math.random() * json.results.length))
        this.setState({ filmData: this.Cleaner.filmCleaner(json.results) })
      })
  }

  buttonSelect(buttonName) {
    if(buttonName === 'planets'){
      return this.fetchPlanets()
    } else if (buttonName === 'people'){
      return this.fetchPeople()
    } else {
      return this.fetchVehicles()
    }
  }
  componentWillMount() {
    this.fetchFilms()
    // this.fetchPeople()
    // this.fetchVehicles()
    // this.fetchPlanets()
  }

  handleClick(e){
    this.setState({
      selected: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SwapiBox</h1>
        <Scroll scrollData={this.state.filmData}/>
        <section>
          <button
            value='people'
            className='fetch-button'
            onClick={(e) => {this.handleClick(e)}}
          >People</button>
          <button
            value='planets'
            className='fetch-button'
            onClick={(e) => {this.handleClick(e)}}
          >Planets</button>
          <button
            value='vehicles'
            className='fetch-button'
            onClick={(e) => {this.handleClick(e)}}
          >Vehicles</button>
        </section>
        <CardHolder
          selected={this.state.selected}
          peopleData={this.state.people}
          peopleAtrributes={this.state.peopleAtrributes}
        />
      </div>
    );
  }
}
