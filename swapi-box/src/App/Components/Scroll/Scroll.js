import React from 'react'

export const Scroll = ({scrollData, personData}) => {
  while(!personData[0]){
    return(
      <section>
        <div>{scrollData.crawl}</div>
        <h3>{scrollData.title}</h3>
        <h4>{scrollData.date}</h4>
      </section>
    )
  }
  console.log(personData[0].homeworld.name)
  let homeworldData = personData[0].homeworld
  // console.log(Object.keys(homeworldData))

return (
  <section>
    <div>{scrollData.crawl}</div>
    <h3>{scrollData.title}</h3>
    <h4>{scrollData.date}</h4>
  </section>
)
// <h5>{homeworldData.name}</h5>
}
