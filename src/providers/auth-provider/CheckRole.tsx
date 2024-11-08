import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import { TypeComponentAuthFields } from './auth-page.types';

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component,
	children,
}) => {
	const { user } = useAuth();
	const router = useRouter();

	if ((user && Component?.isOnlyUser) || !Component?.isOnlyUser)
		return <>{children}</>;

	if (router.pathname !== '/auth') router.replace('/auth');
	return null;
};

export default CheckRole;
