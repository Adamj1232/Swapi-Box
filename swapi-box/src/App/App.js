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
      filmData: [],
      // homeworld: this.Cleaner.personScrubber()
    }
  }

  getFilmData(){
    return fetch('http://swapi.co/api/films/')
    .then((response) => response.json())
    .then((data) => {
      // console.log(this.Cleaner.filmCleaner(data))
      // return this.Cleaner.filmCleaner(data)
      return data

    })
  }

  getPeopleData(){
  //  let worldObj = {}
  //  let worldArr = []
   return fetch('http://swapi.co/api/people/')
   .then((response) => response.json())
   .then((data) => {
     return this.Cleaner.peopleCleaner(data)

   })
  //  .then((data2) => {
  //    data2.peopleData.forEach( person => {
  //      fetch(person.homeworldAPI)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       worldArr.push({name: data.name, pop: data.population})
  //       worldObj.world = worldArr
  //        return worldObj
  //     })
  //    })
  //  })
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

  setPeopleState(response) {
    let cleanPeopleData = this.Cleaner.peopleCleaner(response);
    this.setState({peopleData: cleanPeopleData});
  }


  componentWillMount(){
    // let peopleDatas = this.Cleaner.personScrubber()
    // console.log(peopleDatas);
  this.setState({
     favorites: ['cat'],
     peopleData: this.Cleaner.personScrubber()
   })
  }


  render() {
    return (
      <div className="App">
        <Scroll  personData={this.state.peopleData}/>

      </div>
    );
  }
}
