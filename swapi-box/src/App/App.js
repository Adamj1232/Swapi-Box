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
      people: [],
      peopleThings: {},
      peopleData: {},
      filmData: [],
      homeworld: []
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

  fetchPeople() {
    fetch('https://swapi.co/api/people/')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results[0], ' json')
         this.setState({ people: json.results })
         this.setState({ name2: json.results[0].name,
                         homeworld2: this.getPeople(json.results[0].homeworld, 'homeworld', 'name'),
                         species2: this.getPeople(json.results[0].species[0], 'species', 'name'),
                         population2: this.getPeople(json.results[0].homeworld, 'population', 'population'),
                       })
      })
  }

  getPeople(url, state, key) {
    // console.log(url)
    fetch(url).then((response) => {
      // console.log('response ', response)
      return response.json()
    }).then(jsonResult => {
      // console.log('result ', jsonResult)
      this.setState({ [state]: jsonResult[[key]] })})
  }

  // setPeopleState(response) {
  //   let cleanPeopleData = this.Cleaner.peopleCleaner(response);
  //   this.setState({peopleData: cleanPeopleData});
  // }


  componentWillMount(){
    this.fetchPeople()

  fetch('https://swapi.co/api/films')
    .then((response) => response.json())
    .then((json) => {
      const index = Math.floor((Math.random() * json.results.length))
      this.setState({ filmData: json.results[index] })
    })




    // const peopleApi = 'http://www.swapi.co/api/people';
    //  fetch(peopleApi)
    //    .then(resp => resp.json())
    //    .then((people) => {
    //      this.setPeopleState(people)
    //    })


    // var films = this.getFilmData()
    // var p2 = this.getPeopleData()
    // // console.log('p2 ', p2)
    //
    //
    // Promise.all([films, p2]).then(values => {
    //   // console.log(values[0]);
    //   this.setState({
    //     filmData: values[0].results
    //   })
    //   // console.log(this.state.filmData)
    // });
  }


  render() {
    return (
      <div className="App">
        <Scroll scrollData={this.state.filmData}/>
        <CardHolder personData={this.state.people}/>
      </div>
    );
  }
}
