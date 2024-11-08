import { TypeRootState } from '@/store/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypedSelctor: TypedUseSelectorHook<TypeRootState> = useSelector;
