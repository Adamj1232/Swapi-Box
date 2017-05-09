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
      console.log(person.homeworld)

        // this.getHomeworldData(person.homeworld)
      return {
        person: person.name,
        speciesAPI: person.species[0],
        homeAPI: person.homeworld,
        homeworld: this.getHomeworldData(person.homeworld)
      }
    })
    return peopleResults
  }

  getHomeworldData(api){ //put on page holding cards??
    var homeWorlds = []
     fetch(api)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.name)
       homeWorlds.push({data: data.name, pop: data.population})
       })
    console.log(Object.values(homeWorlds))
    return homeWorlds
  // })
}

}
