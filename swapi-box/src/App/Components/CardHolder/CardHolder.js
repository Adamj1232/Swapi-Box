import React from 'react'
import {Card} from '../Card/Card.js'


export const CardHolder = ({personData}) => {
  if(personData.length === 0){
    return <div>Loading....</div>
  }

  let people = personData.map((person) => {
    return(
      <Card personData={person}/>
    )
  })

return (
  <section>
    <h2>People</h2>
    <div>{people}</div>
  </section>
)
}
