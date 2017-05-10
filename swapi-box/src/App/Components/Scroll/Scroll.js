import React from 'react'

export const Scroll = ({scrollData}) => {
  // console.log(scrollData[0], ' scrolling')
  if(scrollData.length === 0){
    return <div>Loading....</div>
  }

  
return (
  <section>
    <div>{scrollData.title}</div>
    <h3>{scrollData.opening_crawl}</h3>
    <h4>{scrollData.release_date}</h4>
  </section>
)
}
//<div>{scrollData[0].title}</div>
//<h3>{scrollData[0].title}</h3>
//<h4>{scrollData[0].date}</h4>




// while(!personData[0]){
//   return(
//     <section>
//       <div>{scrollData.crawl}</div>
//       <h3>{scrollData.title}</h3>
//       <h4>{scrollData.date}</h4>
//     </section>
//   )
// }
// // console.log(personData[0].homeworld.name)
// let homeworldData = personData[0].homeworld
// // console.log(Object.keys(homeworldData))
