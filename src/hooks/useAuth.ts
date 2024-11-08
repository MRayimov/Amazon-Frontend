import { useTypedSelctor } from './useTypedSelector';

export const useAuth = () => {
	return useTypedSelctor(state => state.user);
};
