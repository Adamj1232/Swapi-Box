import React from 'react'

export const Scroll = ({scrollData}) => {
  // console.log(personData.peopleData.person)
return (
  <section>
    <div>{scrollData.crawl}</div>
    <h3>{scrollData.title}</h3>
    <h4>{scrollData.date}</h4>
  </section>
)
// <h5>{homeworldData.name}</h5>
}
