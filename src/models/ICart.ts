import type {IProducts} from "./IProducts.ts";


export interface ICart {
	discountedTotal: number;
	total: number;
	totalQuantity: number;
	totalProducts: number;
	id: number;
	userId: number;
	products: IProducts[];
}

