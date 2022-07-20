const importAVIF = () => {
	// require all .png files in the '/sprites' directory
	const context = require.context('../assets/avif', false, /\.avif$/);

	// get array of file names matching context search.
	const avifPathArr = context.keys();
	// natrual sort the file names  
	const avifArr = naturalSort(avifPathArr).map(context);

	return avifArr;
};

const naturalSort = (Array) => {
	// sort alphabetically & atomically. 
	// (a01, a02, b01, ..., b10, z01, z02)
	return Array.sort((a, b) =>
		a.localeCompare(b, navigator.language, { numeric: true })
	);
};

export default importAVIF;