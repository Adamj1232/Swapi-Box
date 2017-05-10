import React from 'react'
import {Card} from '../Card/Card.js'

// const getPlanet = (person) => {
//   let personName = person.name
//   fetch(person.homeworld)
//   .then(data => data.json())
//      .then(jsonResult => {
//        console.log(jsonResult)
//      }
// }
// const getPeople = (data) => {
//   let planets = {}
//   let species = {}
//   return data.map((person) => {
//     planets = getPlanet(person)
//   })
// }

export const CardHolder = ({personData}) => {
  if(personData.length === 0){
    return <div>Loading....</div>
  }
// console.log(personData[0])
  let personKeys = Object.keys(personData)
  let result = personKeys.forEach((key) => {
    // console.log(personData[key])
  })
return (
  <section>
    <Card personData={personData[0]}/>
    <div>{personData[0].name}</div>
    <h3></h3>
    <h4></h4>
  </section>
)
}
