import { ICartItem } from '@/types/cart.interface';

export interface IInitialState {
	items: ICartItem[];
}
export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}
export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus';
}
export type TypeSize = 'SHORT' | 'TALL';
export interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
	size: TypeSize;
}
