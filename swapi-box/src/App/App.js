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
      peopleData: [],
      filmData: {},
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
    fetch('http://swapi.co/api/people/')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        peopleData: this.Cleaner.peopleCleaner(data)

      })
    })
  }

//   getHomeworldData(){ //put on page holding cards??
//     console.log(this.state.peopleData + 'peopleData')
//     let worldInfo = this.state.peopleData.map( api => {
//       console.log(api + "appppppi")
//      fetch(api.homeAPI)
//     .then((response) => response.json())
//     .then((data) => {
//         return { homeworld: data.name, population: data.population,}
//        })
//       // else {
//       //   this.setState({ species: data.name, language: data.language,
//       //  })
//       // }
//     })
//     return this.state.homeworld.push(worldInfo)
//   // })
// }

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
    this.getPeopleData(),
    this.getPlanetsData(),
    this.getVehicleData()}
  }
  // componentDidMount(prevProps, prevState){
  //   this.getHomeworldData()
  // }



  render() {
    return (
      <div className="App">
        <Scroll scrollData={this.state.filmData}/>
      </div>
    );
  }
}
