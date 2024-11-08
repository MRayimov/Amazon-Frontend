import { IUser } from './user.interface';

export interface IReview {
	createdAt: string;
	text: string;
	rating: number;
	id: number;
	user: IUser;
}
