class Query {
  // private field url api
  #searchArticleUrl =
    "https://en.wikipedia.org/w/api.php?origin=*&action=query&generator=search&exintro=&prop=extracts%7Cpageimages&pithumbsize=1000&format=json&gsrsearch=";
  // search method
  async search(query) {
    const responses = await fetch(this.#searchArticleUrl + query);
    const rawDatas = await responses.json();

    /* filter */
    const results = [];
    for (let key in rawDatas.query.pages) {
      results.push(rawDatas.query.pages[key]);
    }

    return results; 
  }
}

export { Query };
