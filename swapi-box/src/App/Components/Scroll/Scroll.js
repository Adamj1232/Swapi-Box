import React from 'react'

export const Scroll = ({scrollData}) => {
  if(scrollData.length === 0){
    return <div>Loading....</div>
  }

  return (
    <section>
      <div>{scrollData.title}</div>
      <h3>{scrollData.crawl}</h3>
      <h4>{scrollData.date}</h4>
    </section>
  )
}
