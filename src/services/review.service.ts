import { axiosClassic, instance } from '@/api/api.interceptor';
import { IReview } from '@/types/review.interface';
const REVIEWS = '/reviews';
type TypeData = {
	rating: number;
	text: string;
};
export const ReviewService = {
	async getAll() {
		return await axiosClassic<IReview[]>({
			url: REVIEWS,
			method: 'GET',
		});
	},
	async getAvarageByProduct(productId: number | string) {
		return await axiosClassic<number>({
			url: `${REVIEWS}/average-by-product/${productId}`,
			method: 'GET',
		});
	},
	async leave(productId: string | number, data: TypeData) {
		return await instance<number>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data,
		});
	},
};
