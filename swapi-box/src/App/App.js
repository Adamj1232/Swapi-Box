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
      peopleData: {
        peopleCleaner: {},
        homeworld: {}
      },
      filmData: {},
      homeworld: []
    }
  }

  getFilmData(){
    fetch('http://swapi.co/api/films/')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        filmData: this.Cleaner.filmCleaner(data)
      })
    })
  }

  getPeopleData(){
    let worldArrr = []
    fetch('http://swapi.co/api/people/')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        peopleData: this.Cleaner.peopleCleaner(data)
      })
      return this.Cleaner.peopleCleaner(data)
    }).then((data2) => {
      data2.forEach( person => {
        fetch(person.homeworldAPI)
       .then((response) => response.json())
       .then((data) => {
         worldArrr.push({name: data.name, pop:data.population})
          this.setState({
            homeworld: worldArrr
          })
          return worldArrr
       })
      })
    })
  }

  getHomeworldData(api){ //put on page holding cards??
     fetch(api)
    .then((response) => response.json())
    .then((data) => {
      //  console.log(data.name)
       return data
    })
  }

  getPlanetsData(){
    fetch('http://swapi.co/api/planets/')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      // this.setState({
      //   data: {
      //     crawl: data.results[scrollEpisode].opening_crawl,
      //     title: data.results[scrollEpisode].title,
      //     date: data.results[scrollEpisode].release_date,
      //   }
      // })
    })
  }
  getVehicleData(){
    fetch('http://swapi.co/api/vehicles/')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      // this.setState({
      //   data: {
      //     crawl: data.results[scrollEpisode].opening_crawl,
      //     title: data.results[scrollEpisode].title,
      //     date: data.results[scrollEpisode].release_date,
      //   }
      // })
    })
  }



  componentWillMount(){
    {this.getFilmData(),
     this.getPeopleData()}
  }


  render() {
    return (
      <div className="App">
        <Scroll scrollData={this.state.filmData} personData={this.state.peopleData}/>

      </div>
    );
  }
}
