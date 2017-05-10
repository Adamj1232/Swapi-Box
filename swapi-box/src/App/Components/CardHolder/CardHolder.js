import React from 'react'
import {Card} from '../Card/Card.js'


export const CardHolder = ({personData, trial}) => {
  if(personData.length === 0){
    return <div>Loading....</div>
  }
  if(trial.length === 10) {
    console.log(trial[0])
    console.log(trial[1].homeworld2, ' home')
    console.log(trial[1].name2, ' name')
    console.log(trial[1].species, ' spe')
    console.log(trial[1].population2, ' pop')
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
