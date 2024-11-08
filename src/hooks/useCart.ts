import { useTypedSelctor } from './useTypedSelector';

export const useCart = () => useTypedSelctor(state => state.cart);
