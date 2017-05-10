import React from 'react'

export const Scroll = ({scrollData}) => {
  if(scrollData.length === 0){
    return <div>Loading....</div>
  }

  return (
    <section className='crawl'>
      <div className="title">
        <h2>{scrollData.date}</h2>
        <p>{scrollData.title}</p>
      </div>
      <p className='widen'>{scrollData.crawl}</p>
    </section>
  )
}
