import React from 'react'
import {Card} from '../Card/Card.js'


export const CardHolder = ({personData, trial}) => {
  if(personData.length === 0){
    return <div>Loading....</div>
  }
  if(trial.length === 10) {
    
  }

  let people = trial.map((person) => {
    return(
      <Card name={person.name2}
            homeworld={person.homeworld2}
            species={person.species}
            population={person.population2}
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
