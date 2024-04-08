const searchArticleUrl =
  "https://id.wikipedia.org/w/api.php?origin=*&action=query&generator=search&exintro=&prop=extracts%7Cpageimages&pithumbsize=200&format=json&gsrsearch=";
const queryByPageId =
  "https://id.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts%7Cpageimages&pithumbsize=1000&exintro=&explaintext&pageids=";
export { searchArticleUrl, queryByPageId };
