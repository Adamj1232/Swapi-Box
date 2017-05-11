export default class Cleaner {

  filmCleaner(data){
    let scrollEpisode = Math.floor(Math.random() * ((data.length-1)+1) + 1)
    return {
      crawl: data[scrollEpisode].opening_crawl,
      title: data[scrollEpisode].title,
      date: data[scrollEpisode].release_date,
    }
  }

   peopleCleaner(response) {
  return response.results.reduce((obj, person) => {
    if(!obj[person.name]) {
      // console.log(person, ' person')
      obj[person.name] = {};
      obj[person.name].name = person.name;
      obj[person.name].homeworld = "example text";

      fetch(person.homeworld)
        .then(resp => resp.json())
        .then(world => obj[person.name].homeworld = world.name)
        .catch(() => 'error')

      fetch(person.homeworld)
        .then(resp => resp.json())
        .then(world => obj[person.name].population = world.population)
        .catch(() => 'error')

      fetch(person.species)
        .then(resp => resp.json())
        .then(species => obj[person.name].species = species.name)
        .catch(() => 'error')
    }
    console.log('reduce ', obj)
    return obj
  }, {})
}

  // peopleCleaner(data){
  //   let peopleResults = data.results.map( person => {
  //     // console.log(person.homeworld)
  //     var results
  //     return results = {
  //       person: person.name,
  //       homeworldAPI: person.homeworld,
  //       homeworld: 'this.getHomeworldData(person.homeworld)'
  //     }
  //   })
  //   return peopleResults
  // }

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
