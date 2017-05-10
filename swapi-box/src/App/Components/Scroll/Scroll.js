import React from 'react'

export const Scroll = ({scrollData}) => {
  if(scrollData.length === 0){
    return <div>Loading....</div>
  }

  return (
    <section>
      <h3>{scrollData.crawl}</h3>
      <div>{scrollData.title}</div>
      <h4>{scrollData.date}</h4>
    </section>
  )
}
