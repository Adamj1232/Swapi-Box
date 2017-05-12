import React from 'react'
import { Card } from '../Card/Card.js'
import './CardHolder.css';
import PropTypes from 'prop-types'

export const CardHolder = ({selected, peopleData, planetData, vehicleData, peopleAtrributes, handleFavoriteSelect, favoriteCards}) => {

  if(selected === 'people'){
  let people = peopleAtrributes.map((person) => {

    return(
      <Card
        className='card'
        name={person.name2}
        homeworld={person.homeworld2}
        species={person.species}
        population={person.population2}
        key={person.name2}
        selected={selected}
        cardOnClick={handleFavoriteSelect}
      />
    )
  })

  return (
    <section>
      <div className="card-holder">{people}</div>
    </section>
  )
  } else if (selected === 'planets'){
    let planets = planetData.map((planet) => {
      return(
        <Card
          className='card'
          name={planet.name}
          terrain={planet.terrain}
          population={planet.population}
          climate={planet.climate}
          residents={planet.residents}
          key={planet.name}
          selected={selected}
          cardOnClick={handleFavoriteSelect}
        />
      )
    })

    return (
      <section>
        <div className="card-holder">{planets}</div>
      </section>
    )
  } else if (selected === 'vehicles'){
    let vehicles = vehicleData.map((vehicle) => {
      return(
        <Card
          className='card'
          name={vehicle.name}
          model={vehicle.model}
          vehicleClass={vehicle.class}
          passengers={vehicle.passengers}
          key={vehicle.name}
          selected={selected}
          cardOnClick={handleFavoriteSelect}
        />
      )
    })

    return (
      <section >
        <div className="card-holder">{vehicles}</div>
      </section>
    )
  } else if (selected === 'favorites'){
    let favorites = favoriteCards.map((favoriteCard) => {
      return(
        <Card
          className='card fav'
          name={favoriteCard.name}
          homeworld={favoriteCard.homeworld}
          species={favoriteCard.species}
          population={favoriteCard.population}
          terrain={favoriteCard.terrain}
          species={favoriteCard.species}
          climate={favoriteCard.climate}
          residents={favoriteCard.residents}
          population={favoriteCard.population}
          model={favoriteCard.model}
          vehicleClass={favoriteCard.vehicleClass}
          passengers={favoriteCard.passengers}
          key={favoriteCard.name}
          selected={favoriteCard.selected}
          cardOnClick={handleFavoriteSelect}
          favSelected='fav'
        />
      )
    })

    return (
      <section >
        <div className="card-holder">{favorites}</div>
      </section>
    )
  }
  return (
    <section></section>
  )
}

CardHolder.propTypes = {
  selected: PropTypes.string,
  peopleData: PropTypes.array,
  planetData: PropTypes.array,
  vehicleData: PropTypes.array,
  peopleAtrributes: PropTypes.array,
  handleFavoriteSelect: PropTypes.func,
  favoriteCards: PropTypes.array,
  btnSelected: PropTypes.func,
}
