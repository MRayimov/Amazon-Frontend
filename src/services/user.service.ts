import { instance } from '@/api/api.interceptor';
import { IFullUser, IUser } from '@/types/user.interface';
const USERS = '/users';
type TypeData = {
	email: string;
	password?: string;
	name?: string;
	avatarPath?: string;
	phone?: string;
};
export const UserService = {
	async getProfile() {
		return await instance<IFullUser>({
			url: `${USERS}/profile`,
			method: 'GET',
		});
	},
	async updateProfile(data: TypeData) {
		return await instance<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data,
		});
	},
	async toggleFavourite(productId: string | number) {
		return await instance<IUser>({
			url: `${USERS}/profile/favourites/${productId}`,
			method: 'PATCH',
		});
	},
};
