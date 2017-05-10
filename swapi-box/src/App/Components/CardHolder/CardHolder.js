import React from 'react'
import {Card} from '../Card/Card.js'

export const CardHolder = ({selected, peopleData, planetData, vehicleData, peopleAtrributes}) => {
  // if(selected === '' ){
  //   return <div>Loading....</div>
  // }
  if(peopleData.length === 0 || !planetData.length || !vehicleData.length ){
    return <div>Loading....</div>
  } //only run when making all api calls

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
        selected={selected}
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
    let planets = planetData.map((planet) => {
      return(
        <Card
          name={planet.name}
          terrain={planet.terrain}
          population={planet.population}
          climate={planet.climate}
          residents={planet.residents}
          key={planet.name}
          selected={selected}
        />
      )
    })

    return (
      <section>
        <h2>Planets</h2>
        <div>{planets}</div>
      </section>
    )
  } else if (selected === 'vehicles'){
    console.log('vehicles')
    let vehicles = planetData.map((vehicle) => {
      return(
        <Card
          name={vehicle.name}
          model={vehicle.model}
          vehicleClass={vehicle.class}
          passengers={vehicle.passengers}
          key={vehicle.name}
          selected={selected}
        />
      )
    })

    return (
      <section>
        <h2>Vehicles</h2>
        <div>{vehicles}</div>
      </section>
    )
  }
  return (
    <section></section>
  )
}
