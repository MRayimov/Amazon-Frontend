import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { getAccessToken } from '@/services/auth/auth.helper';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect } from 'react';
import { TypeComponentAuthFields } from './auth-page.types';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser }, // This comes from the child component now
	children,
}) => {
	const { user } = useAuth();
	const { checkAuth, logout } = useActions();
	const { pathname } = useRouter();

	useEffect(() => {
		const accessToken = getAccessToken();
		if (accessToken) checkAuth();
	}, [checkAuth]);

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken');
		if (!refreshToken && user) logout();
	}, [pathname, logout, user]);

	return isOnlyUser ? (
		<DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
	) : (
		<>{children}</>
	);
};

export default AuthProvider;
