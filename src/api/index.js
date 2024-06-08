const searchArticleUrl =
	"https://id.wikipedia.org/w/api.php?origin=*&action=query&generator=search&exintro=&prop=extracts%7Cpageimages&pithumbsize=200&format=json&gsrsearch=";
const gsrSearchUrl =
	"https://id.wikipedia.org/w/api.php?origin=*&action=query&generator=search&gsrlimit=10&prop=pageimages|extracts&exintro&exlimit=max&format=json&gsrsearch=";
const queryByPageId =
	"https://id.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts|pageimages|info|pageprops|extlinks&pithumbsize=600&inprop=url&redirects=1000&format=json&pageids=";
const parseByPageId =
	"https://id.wikipedia.org/w/api.php?origin=*&action=parse&section=0&prop=sections&sectionformat=wiki&format=json&pageid=";
export { searchArticleUrl, queryByPageId, parseByPageId, gsrSearchUrl };
