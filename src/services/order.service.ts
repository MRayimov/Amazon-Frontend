import { instance } from '@/api/api.interceptor';
import { IOrder } from '@/types/order.interface';
const ORDERS = '/orders';

export const OrdersService = {
	async getAll() {
		return await instance<IOrder[]>({
			url: ORDERS,
			method: 'GET',
		});
	},
};
