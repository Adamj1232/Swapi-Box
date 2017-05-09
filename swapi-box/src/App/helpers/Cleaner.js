export default class Cleaner {

  filmCleaner(data){
    let scrollEpisode = Math.floor(Math.random() * ((7-1)+1) + 1)
    return {
      crawl: data.results[scrollEpisode].opening_crawl,
      title: data.results[scrollEpisode].title,
      date: data.results[scrollEpisode].release_date,
    }
  }

  peopleCleaner(data){
    let peopleResults = data.results.map( person => {
      // console.log(person)
      // let worldName = fetch(person.homeworld)
      // .then((response) => response.json())
      // .then((data) => {
      //   if(data){
      //   console.log(data.name)
      //   return data.name
      //   }
      // })
      return {
        person: person.name,
        // homeworld: worldName
      }
    })
    return peopleResults
  }

  // homeworldCleaner(person){
  //   let worldName = fetch(person.homeworld)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if(data){
  //     console.log(data.name)
  //     return data.name
  //     }
  //   })
  // }

}
