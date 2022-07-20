import importAVIF from '../utilities/importAVIF';
import { Product } from './Product';

export const Catalog = (() => {
	const image = importAVIF();
	const imageCatalog = {
		Concentrate: [
			image[0],
			image[1],
			image[2],
		],
		Flower: [
			image[3],
			image[4],
			image[5],
		],

		Vape: [
			image[6],
			image[7],
			image[8],
		],
	};

	const productCatalog = {
		Concentrate: [
			Product('Shatter', '30.00', 'Concentrate', imageCatalog.Concentrate[0]),
			Product('Wax', '40.00', 'Concentrate', imageCatalog.Concentrate[1]),
			Product('Sugar', '45.00', 'Concentrate', imageCatalog.Concentrate[2]),
		],
		Flower: [
			Product('Headband', '20.00', 'Flower', imageCatalog.Flower[0]),
			Product('Intergalactic', '25.00', 'Flower', imageCatalog.Flower[1]),
			Product('Skunk', '30.00', 'Flower', imageCatalog.Flower[2]),
		],
		Vape: [
			Product('Berry Haze', '25.00', 'Vape', imageCatalog.Vape[0]),
			Product('Dutch Dragon', '25.00', 'Vape', imageCatalog.Vape[1]),
			Product('Stone Fruit', '35.00', 'Vape', imageCatalog.Vape[2]),
		],
	};

	return productCatalog;
})();