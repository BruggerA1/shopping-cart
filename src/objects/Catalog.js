import importAVIF from '../utilities/importAVIF';
import { Product } from './Product';

export const Catalog = (() => {
	const image = importAVIF();
	const imageCatalog = {
		Concentrate: {
			1: image[0],
			2: image[1],
			3: image[2],
		},
		Flower:   {
			1: image[3],
			2: image[4],
			3: image[5],
		},

		Vape:  {
			1: image[6],
			2: image[7],
			3: image[8],
		},
	};

	const productCatalog = {
		Concentrate: {
			1: Product('Shatter', '30.00', 'Concentrate', imageCatalog.Concentrate[1]),
			2: Product('Wax', '40.00', 'Concentrate', imageCatalog.Concentrate[2]),
			3: Product('Sugar', '45.00', 'Concentrate', imageCatalog.Concentrate[3]),
		},
		Flower: {
			1: Product('Headband', '20.00', 'Flower', imageCatalog.Flower[1]),
			2: Product('Intergalactic', '25.00', 'Flower', imageCatalog.Flower[2]),
			3: Product('Skunk', '30.00', 'Flower', imageCatalog.Flower[3]),
		},
		Vape: {
			1: Product('Berry Haze', '25.00', 'Vape', imageCatalog.Vape[1]),
			2: Product('Dutch Dragon', '25.00', 'Vape', imageCatalog.Vape[2]),
			3: Product('Stone Fruit', '35.00', 'Vape', imageCatalog.Vape[3]),
		},
	}
	return productCatalog;
})();