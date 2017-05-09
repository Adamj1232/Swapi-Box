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
      homeworld: []
    }
  }

  getFilmData(){
    return fetch('http://swapi.co/api/films/')
    .then((response) => response.json())
    .then((data) => {
      return this.Cleaner.filmCleaner(data)
    })
  }

  getPeopleData(){

    return fetch('http://swapi.co/api/people/')
    .then((response) => response.json())
    .then((data) => {
      return this.Cleaner.peopleCleaner(data)

    })
  }

  // .then((data2) => {
  //   data2.peopleData.forEach( person => {
  //     fetch(person.homeworldAPI)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       worldArr.push({name: data.name, pop: data.population})
  //       console.log(worldArr)
  //       return worldObj.world = worldArr
  //     })
  //   })
  // })

  getHomeworldData(){
    // console.log(this.state.peopleData)
    let worldArr =[]
    return this.state.peopleData.forEach( person => {
        fetch(person.homeworldAPI)
        .then((response) => response.json())
        .then((data) => {
          // console.log('homeworld    ' +  {name: data.name, pop: data.population})
            this.state.homeworld.push({name: data.name, pop: data.population})

        })
        console.log(worldArr)
    })
    // return worldArr
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
    var films = this.getFilmData()
    var p2 = this.getPeopleData()
    // console.log( p2)
    // console.log(this.getHomeworldData)


    Promise.all([films, p2]).then(values => {
      // console.log(values[1]);
      this.setState({
        filmData: values[0],
        peopleData: values[1]
      }).then(() =>{
        this.getHomeworldData()
      })
        // Promise.all(p3).then((values2) => {
        //   console.log(values2)
        // })
        // this.setState({
        //   homeworld: this.getHomeworldData()
        // })
      })
  }


  render() {
    return (
      <div className="App">
        <Scroll scrollData={this.state.filmData}/>

      </div>
    );
  }
 }
