import React from 'react'

export const Scroll = ({scrollData}) => {
  // console.log(scrollData)
  return(
    <section>
      <div>{scrollData.crawl}</div>
      <h3>{scrollData.title}</h3>
      <h4>{scrollData.date}</h4>
    </section>
  )
}
