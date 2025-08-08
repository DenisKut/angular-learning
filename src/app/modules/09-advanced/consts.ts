export const API_PRODUCTS = `https://fakestoreapi.com/products`;

export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
	// New property
	sales?: number;
}
