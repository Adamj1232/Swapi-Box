import React, { Component } from 'react'
import './Card.css';
import PropTypes from 'prop-types'

export const Card = ({name, homeworld, species, population, selected, terrain, climate, residents, model, vehicleClass, passengers, cardOnClick, favSelected}) => {
  if ( selected === 'people'){
    return(
      <section className='card'>
        <div className='top-info'>
          <h3>{name}</h3>
          <button className={favSelected} onClick={(e) => {cardOnClick(e, {name, species, homeworld, population, selected})}}>favorite</button>
        </div>
        <section className='bottom-info'>
          <div>Species: {species}</div>
          <div>Homeworld: {homeworld}</div>
          <div>Population: {population}</div>
        </section>
      </section>
    )
  } else if ( selected === 'planets'){
    return(
      <section className='card'>
        <div className='top-info'>
          <h3>{name}</h3>
          <button className={favSelected} onClick={(e) => {cardOnClick(e, {name, terrain, population, climate, residents, selected})}}>favorite</button>
        </div>
        <section className='bottom-info'>
          <div>Terrain: {terrain}</div>
          <div>Population: {population}</div>
          <div>Climate: {climate}</div>
          <div>Residents: {residents}</div>
        </section>
      </section>
    )
  } else if ( selected === 'vehicles'){
    return(
      <section className='card'>
        <div className='top-info'>
          <h3>{name}</h3>
          <button className={favSelected} onClick={(e) => {cardOnClick(e, {name, model, vehicleClass, passengers, selected})}}>favorite</button>
        </div>
        <section className='bottom-info'>
          <div>Model: {model}</div>
          <div>Class: {vehicleClass}</div>
          <div>Passengers: {passengers}</div>
        </section>
      </section>
    )
  } else {
    return (
      <div></div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  population: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  model: PropTypes.string,
  vehicleClass: PropTypes.string,
  passengers: PropTypes.string,
  cardOnClick: PropTypes.func,
  toggleButtonClass: PropTypes.func,
}
