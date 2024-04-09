const searchArticleUrl =
  "https://id.wikipedia.org/w/api.php?origin=*&action=query&generator=search&exintro=&prop=extracts%7Cpageimages&pithumbsize=200&format=json&gsrsearch=";
const queryByPageId =
  "https://id.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts|pageimages|info&pithumbsize=400&inprop=url&redirects=1000&format=json&pageids=";
export { searchArticleUrl, queryByPageId };
