import React from 'react'

export const Scroll = ({scrollData, personData}) => {
  // console.log(scrollData[0], ' scrolling')
  if(scrollData.length === 0){
    return <div>Loading....</div>
  }

  console.log(scrollData);
return (
  <section>
    <div>{scrollData[0].title}</div>
    <h3>{scrollData[0].title}</h3>
    <h4>{scrollData[0].date}</h4>
  </section>
)
// <h5>{homeworldData.name}</h5>
}





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
