function hendleNewLine(strArticle, callback) {
	let buffer = strArticle.replace(/\n/g, "<br>");
	buffer = buffer.split("<br>");
	buffer = buffer.filter(arr => arr != "");
	buffer = buffer.join("");
	buffer = buffer.replace(
		/<h2/g,
		"<h2 data-aos='fade-up' class='text-2xl mt-3 mb-1 font-bold' "
	);
	buffer = buffer.replace(
		/<h3/g,
		"<h3 data-aos='fade-up' class='text-xl mt-2 mb-1 font-bold' "
	);
	buffer = buffer.replace(
		/<h4/g,
		"<h4 data-aos='fade-up' class='text-md mt-2 font-bold' "
	);
	buffer = buffer.replace(
		/<p/g,
		"<p data-aos='fade-up' data-aos-delay='100' class='text-justify my-2  text-[hsl(0,0%,83.1%)]' "
	);
	buffer = buffer.replace(
		/<ol/g,
		"<ul data-aos='fade-up' data-aos-delay='100' "
	);
	buffer = buffer.replace(
		/<ul/g,
		"<ul data-aos='fade-up' data-aos-delay='100' "
	);
	buffer = buffer.replace(
		/<dl/g,
		"<dl data-aos='fade-up' data-aos-delay='100' "
	);
	console.log(buffer)

	const regex = / id="(\w+)"/g;
	const matches = buffer.matchAll(regex);
	const ids = [...matches].map(m => m[1]);

	callback(buffer, ids);
}

export { hendleNewLine };
