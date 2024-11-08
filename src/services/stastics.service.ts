import { instance } from '@/api/api.interceptor';
const STATISTICS = '/statistics';
export type TypeStatisticsResponse = { name: string; value: number }[];
export const StatisticsService = {
	async getMain() {
		return await instance<TypeStatisticsResponse[]>({
			url: `${STATISTICS}/main`,
			method: 'GET',
		});
	},
};
