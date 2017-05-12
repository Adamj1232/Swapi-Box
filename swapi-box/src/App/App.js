import React, { Component } from 'react';
import './App.css';
import { Scroll } from './Components/Scroll/Scroll.js'
import { Card } from './Components/Card/Card.js'
import { CardHolder } from './Components/CardHolder/CardHolder.js'
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

  fetchVehicles(e) {
    this.handleClick(e)
    if(!this.state.vehicles.length)
    {fetch('https://swapi.co/api/vehicles/')
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
        this.setState({
          vehicles: this.state.vehicles
        })
      })
    }).catch(() => console.log('ERROr'))}
  }

  fetchPlanets(e) {
    this.handleClick(e)
      if(!this.state.planets.length){
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

  fetchPeople(e) {
    this.handleClick(e)
    if(!this.state.people.length){
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
  }

  getPeople(url) {
    return fetch(url)
    .then(response => response.json())
    .then(jsonResult => jsonResult)
  }

  fetchFilms() {
    return fetch('https://swapi.co/api/films')
      .then((response) => {
        return response.json()})
      .then((json) => {
        return this.setState({ filmData: this.Cleaner.filmCleaner(json.results) })
      }).catch(() => console.log('ERROr'))
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

  clickFavoriteSelect(e, objectData) {
    let favs = this.state.favorites

    if(favs.length === 0){
      e.currentTarget.className = 'fav'
      favs.push(objectData)
      this.setState({
        favorites: favs
      })
    } else {
      let otherFavs = favs.map(val => {
        return val.name
      })
      if(otherFavs.indexOf(objectData.name) === -1) {
        e.currentTarget.className = 'fav'
        favs.push(objectData)
      } else {
        let index = otherFavs.indexOf(objectData.name)
        e.currentTarget.className = ''
        favs.splice(index, 1)
      }
      this.setState({
        favorites: favs
      })
    }
  }

  componentWillMount() {
    this.fetchFilms()
  }

  handleClick(e, cardName){
    this.setState({
      selected: e.target.value
    })
  }

  whatIsSelected(cardName){
    if(this.state.selected === cardName){
      return 'fetch-button selected'
    } else {
      return 'fetch-button'
    }
  }

  isSelected(card){
    console.log('working')
    if(this.state.favorites.length > 0){
      this.state.favorites.map(val => {
      if(card.name === val.name) {
        console.log(card.name)
        console.log(val.name)
        return 'fav'
      } else {
        return ''
      }
    })}
  }

  render() {
    return (
      <div className="App">
        <h1>SwapiBox</h1>
        <button
          className={this.whatIsSelected('favorites')}
          value='favorites'
          onClick={(e) => {this.handleClick(e)}}
        >
          View Favorites
          <span className='favorites-num'>{this.state.favorites.length}</span>
        </button>
        <section className='header-btn'>
          <button
            value='people'
            className={`${this.whatIsSelected('people')} peopleBtn`}
            onClick={(e) => {this.fetchPeople(e)}}
          >People</button>

          <button
            value='planets'
            className={`${this.whatIsSelected('planets')} planetsBtn`}
            onClick={(e) => {this.fetchPlanets(e)}}
          >Planets</button>

          <button
            value='vehicles'
            className={`${this.whatIsSelected('vehicles')} vehiclesBtn`}
            onClick={(e) => {this.fetchVehicles(e)}}
          >Vehicles</button>

        </section>
        <section className="bottom-wrap">
          <div className='scroll-wrap'>
            <div className='fade'></div>
            <section className='star-wars'>
              <Scroll scrollData={this.state.filmData}/>
            </section>
          </div>
          <CardHolder
            selected={this.state.selected}
            peopleData={this.state.people}
            planetData={this.state.planets}
            vehicleData={this.state.vehicles}
            peopleAtrributes={this.state.peopleAtrributes}
            handleFavoriteSelect={this.clickFavoriteSelect.bind(this)}
            favoriteCards={this.state.favorites}
            btnSelected={this.isSelected.bind(this)}
          />
        </section>
      </div>
    )
  }
}
