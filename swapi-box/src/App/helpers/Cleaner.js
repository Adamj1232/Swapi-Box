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
      var results
      return results = {
        person: person.name,
        homeworldAPI: person.homeworld,
        homeworld: 'this.getHomeworldData(person.homeworld)'
      }
    })
    return peopleResults
  }

  getHomeworldData(api){ //put on page holding cards??
     fetch(api)
    .then((response) => response.json())
    .then((data) => {
       return {name: data.name,
       pop: data.population}
       })
  }

  getSpeciesData(api){ //put on page holding cards??
    var species = {}
     fetch(api)
    .then((response) => response.json())
    .then((data) => {
       species.speciesName = data.name
    })
    return species
  }


}
