import { instance } from '@/api/api.interceptor';
import { IPaymentResponse } from '@/types/payment.interface';

const PAYMENT = '/payment';

export const PaymentService = {
	async createPayment(amount: number) {
		return instance<IPaymentResponse>({
			url: PAYMENT,
			method: 'POST',
			data: { amount },
		});
	},
};
