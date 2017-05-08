import React from 'react'

export const Scroll = ({scrollData}) => {
  // console.log(data)
  return(
    <div>
      <div>{scrollData.title}</div>
      <div>{scrollData.crawl}</div>
    </div>
  )
}
