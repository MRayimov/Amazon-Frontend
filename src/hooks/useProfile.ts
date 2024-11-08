import { UserService } from '@/services/user.service';
import { IFullUser } from '@/types/user.interface';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAuth } from './useAuth';

export const useProfile = () => {
	const { user } = useAuth();
	const { data, isError } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
		enabled: !!user,
	});
	useEffect(() => {}, [isError]);
	return { profile: data || ({} as IFullUser) };
};
