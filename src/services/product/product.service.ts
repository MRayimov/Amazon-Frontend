import { axiosClassic, instance } from '@/api/api.interceptor';
import { IProduct, TypePaginationProducts } from '@/types/product.interface';
import { TypeProductData, TypeProductDataFilters } from './product.types';
const PRODUCTS = '/products';

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		return await axiosClassic<TypePaginationProducts>({
			url: PRODUCTS,
			method: 'GET',
			params: queryData,
		});
	},
	async getSimilar(productId: string | number) {
		return await axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/similar/${productId}`,
			method: 'GET',
		});
	},
	async getBySlug(slug: string) {
		return await axiosClassic<IProduct>({
			url: `${PRODUCTS}/by-slug/${slug}`,
			method: 'GET',
		});
	},
	async getById(id: string | number) {
		return await instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'GET',
		});
	},
	async getByCategory(categorySlug: string) {
		return await instance<IProduct[]>({
			url: `${PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET',
		});
	},
	async create() {
		return await instance<IProduct>({
			url: PRODUCTS,
			method: 'POST',
		});
	},
	async update(id: string | number, data: TypeProductData) {
		return await instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'PUT',
			data,
		});
	},
	async delete(id: string | number) {
		return await instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'DELETE',
		});
	},
};
