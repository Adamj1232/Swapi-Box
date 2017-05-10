import React from 'react'
import {Card} from '../Card/Card.js'


export const CardHolder = ({peopleData, peopleAtrributes}) => {
  if(peopleData.length === 0){
    return <div>Loading....</div>
  }
  if(peopleAtrributes.length === 10) {
  }

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
}
