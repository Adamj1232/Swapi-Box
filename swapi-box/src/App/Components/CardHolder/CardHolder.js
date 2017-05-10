import React from 'react'
import {Card} from '../Card/Card.js'

export const CardHolder = ({selected, peopleData, planetData, vehicleData, peopleAtrributes}) => {
  if(selected === '' ){
    return <div>Loading....</div>
  }
  // if(peopleData.length === 0 || !planetData.length || !vehicleData.length ){
  //   return <div>Loading....</div>
  // } only run when making all api calls

  if(selected === 'people'){
    console.log('people')
  let people = peopleAtrributes.map((person) => {
    return(
      <Card
        name={person.name2}
        homeworld={person.homeworld2}
        species={person.species}
        population={person.population2}
        key={person.name2}
      />
    )
  })

  return (
    <section>
      <h2>People</h2>
      <div>{people}</div>
    </section>
  )
} else if (selected === 'planets'){
  console.log('planets')
  return(
    <div>Planets</div>
  )
} else if (selected === 'vehicles'){
  console.log('vehicles')
  return(
    <div>Vehicles</div>
  )
}

}
