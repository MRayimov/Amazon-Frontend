import { ICartItem } from './cart.interface';
import { IUser } from './user.interface';

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED',
}
export type IOrder = {
	id: number;
	createdAt: string;
	item: ICartItem[];
	status: EnumOrderStatus;
	user: IUser;
};
