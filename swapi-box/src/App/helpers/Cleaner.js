export default class Cleaner {

  filmCleaner(data){
    // console.log(data.results[0], ' results')
    let scrollEpisode = Math.floor(Math.random() * ((7-1)+1) + 1)
    // console.log(data.results[scrollEpisode].opening_crawl, ' random')
    return {
      crawl: data.results[scrollEpisode].opening_crawl,
      title: data.results[scrollEpisode].title,
      date: data.results[scrollEpisode].release_date,
    }
  }

   peopleCleaner(response) {
  return response.results.reduce((obj, person) => {
    // console.log(person[person.name])
    if(!obj[person.name]) {
      // console.log(person, ' person')
      obj[person.name] = [];

      // obj[person.name].push('this');
      // obj[person.name].homeworld = '';

      fetch(person.homeworld)
        .then(resp => resp.json())
        .then(world => obj[person.name].push(world.name))
        .catch(() => 'error')

      fetch(person.homeworld)
        .then(resp => resp.json())
        .then(world => obj[person.name].push( world.population))
        .catch(() => 'error')

      fetch(person.species)
        .then(resp => resp.json())
        .then(species => obj[person.name].push( species.name))
        .catch(() => 'error')
    }
    // console.log('reduce ', obj)
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


personScrubber(){
 let p1 = this.apiCall('http://www.swapi.co/api/people')

 Promise.all([p1]).then(obj => {
  //  console.log('obj', obj)
   return obj.reduce((acc, peopleObj) => {
     peopleObj.results.forEach((people, index) => {
      //  acc[acc.length] = people.name
       acc[people.name] = {}
       Promise.all([this.apiCall(people.homeworld), this.apiCall(people.species[0])]).then(innerObj => {
         acc[people.name].homeworld = innerObj[0].name
         acc[people.name].pop = innerObj[0].population
         acc[people.name].species = innerObj[1].name
        //  console.log(acc)
       })
     })
     return acc
   }, {})
 }).then((listOfPeople) => {
   console.log(Object.keys(listOfPeople))
   return listOfPeople
 })
}

 apiCall(address) {
 return fetch(address).then((response) => response.json())
}
}
