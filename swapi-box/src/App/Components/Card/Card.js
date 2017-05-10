import React, { Component } from 'react'

export const Card = ({name, homeworld, species, population, selected, terrain, climate, residents, model, vehicleClass, passengers}) => {
  if ( selected === 'people'){
    return(
      <section className='card'>
        <div>Name: {name}</div>
        <div>Species: {species}</div>
        <div>Homeworld: {homeworld}</div>
        <div>Population: {population}</div>
      </section>
    )
  } else if ( selected === 'planets'){
    return(
      <section className='card'>
        <div>Name: {name}</div>
        <div>Terrain: {terrain}</div>
        <div>Population: {population}</div>
        <div>Climate: {climate}</div>
        <div>Residents: {residents}</div>
      </section>
    )
  } else if ( selected === 'vehicles'){
    return(
      <section className='card'>
        <div>Name: {name}</div>
        <div>Model: {model}</div>
        <div>Class: {vehicleClass}</div>
        <div>Passengers: {passengers}</div>
      </section>
    )
  } else {
    return (
      <div></div>
    )
  }
}

// function wait(){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//     }, 2000)
//   })
// }
