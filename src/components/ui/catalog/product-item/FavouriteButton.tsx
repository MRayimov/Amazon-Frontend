import { useProfile } from '@/hooks/useProfile';
import { UserService } from '@/services/user.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

const FavouriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationKey: ['toggle favourite'],
		mutationFn: () => UserService.toggleFavourite(productId),
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ['get profile'] }),
	});
	if (!profile) return null;
	const isExist = profile?.favourites?.some(
		favourite => favourite.id === productId,
	);

	return (
		<div>
			<button onClick={() => mutate()} className='text-primary'>
				{isExist ? <FaHeart /> : <FaRegHeart />}
			</button>
		</div>
	);
};

export default FavouriteButton;
