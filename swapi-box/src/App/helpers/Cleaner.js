export default class Cleaner {

  filmCleaner(data){
    let scrollEpisode = Math.floor(Math.random() * ((data.length-1)+1) + 1)
    return {
      crawl: data[scrollEpisode].opening_crawl,
      title: data[scrollEpisode].title,
      date: data[scrollEpisode].release_date,
    }
  }

}
