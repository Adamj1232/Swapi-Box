import React, { Component } from 'react'

export const Card = ({name, homeworld, species, population}) => {

  return(
    <div>
      <div>Name: {name}</div>
      <div>Species: {species}</div>
      <div>Homeworld: {homeworld}</div>
      <div>Population: {population}</div>
    </div>
  )
}

// function wait(){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//     }, 2000)
//   })
// }
