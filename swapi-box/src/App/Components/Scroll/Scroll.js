import React from 'react'
import PropTypes from 'prop-types'

export const Scroll = ({scrollData}) => {
  while(!scrollData.title){
    return <h3>Loading....</h3>
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

Scroll.propTypes = {
  scrollData: PropTypes.object
}
