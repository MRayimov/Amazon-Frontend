import { axiosClassic, instance } from '@/api/api.interceptor';
import { ICategory } from '@/types/category.interface';
const CATEGORIES = '/categories';
export const CategoryService = {
	async getAll() {
		return await axiosClassic<ICategory[]>({
			url: CATEGORIES,
			method: 'GET',
		});
	},
	async getById(id: string | number) {
		return await instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'GET',
		});
	},
	async getBySlug(slug: string) {
		return await axiosClassic<ICategory>({
			url: `${CATEGORIES}/${slug}`,
			method: 'GET',
		});
	},
	async create() {
		return await instance<ICategory>({
			url: CATEGORIES,
			method: 'POST',
		});
	},
	async update(id: string | number, name: string) {
		return await instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'PUT',
			data: { name },
		});
	},
	async delete(id: string | number) {
		return await instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'DELETE',
		});
	},
};
