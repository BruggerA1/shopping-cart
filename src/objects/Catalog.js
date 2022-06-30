import importAVIF from '../utilities/importAVIF';
import { Product } from './Product';

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

	const productCatalog = {
		concentrates: {
			1: Product('Shatter', '30.00', 'Concentrate', imageCatalog.concentrates[1]),
			2: Product('Wax', '40.00', 'Concentrate', imageCatalog.concentrates[2]),
			3: Product('Sugar', '45.00', 'Concentrate', imageCatalog.concentrates[3]),
		},
		flower: {
			1: Product('Headband', '20.00', 'Flower', imageCatalog.flower[1]),
			2: Product('Intergalactic', '25.00', 'Flower', imageCatalog.flower[2]),
			3: Product('Skunk', '30.00', 'Flower', imageCatalog.flower[3]),
		},
		vape: {
			1: Product('Berry Haze', '25.00', 'Vape', imageCatalog.vape[1]),
			2: Product('Dutch Dragon', '25.00', 'Vape', imageCatalog.vape[2]),
			3: Product('Stone Fruit', '35.00', 'Vape', imageCatalog.vape[3]),
		},
	}
	return productCatalog;
})();