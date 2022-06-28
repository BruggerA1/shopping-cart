import importAVIF from '../utilities/importAVIF';

export const Catalog = (() => {
	const image = importAVIF();
	const imageCatalog = {
		concentrates: {
			1: image[0],
			2: image[1],
			3: image[2],
		},
		flower:   {
			1: image[3],
			2: image[4],
			3: image[5],
		},

		vape:  {
			1: image[6],
			2: image[7],
			3: image[8],
		},

	};
	console.log(imageCatalog.concentrates)
	return imageCatalog;
})();