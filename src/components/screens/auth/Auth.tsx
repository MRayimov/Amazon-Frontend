import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { IEmailPassword } from '@/store/user/user.interface';
import Button from '@/ui/button/Button';
import Heading from '@/ui/Heading';
import Field from '@/ui/input/Field';
import Meta from '@/ui/Meta';
import { Spinner } from '@nextui-org/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthRedirect } from './useAuthRedirect';
import { validEmail } from './valid-email';

const Auth = () => {
	useAuthRedirect();

	const { isLoading } = useAuth();
	const { login, register } = useActions();
	const [type, setType] = useState<'login' | 'register'>('login');
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IEmailPassword>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') {
			login(data);
		} else {
			register(data);
		}
		reset();
	};
	return (
		<Meta title='Auth'>
			<section className='flex h-screen'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-lg bg-white shadow-sm p-8 m-auto'
				>
					<Heading className='capitalize text-center mb-4'>{type}</Heading>
					{isLoading ? (
						<Spinner color='warning' />
					) : (
						<>
							<Field
								{...formRegister('email', {
									required: 'Email required',
									pattern: {
										value: validEmail,
										message: 'Please enter a valid email address.',
									},
								})}
								error={errors.email?.message}
								placeholder='Email'
							/>
							<Field
								{...formRegister('password', {
									required: 'Password required',
									minLength: {
										value: 6,
										message: 'Min length must be at least 6 characters',
									},
								})}
								type='password'
								error={errors.password?.message}
								placeholder='Password'
							/>
							<Button type='submit' variant='orange'>
								Let&apos;s go!
							</Button>
							<div>
								<button
									type='button'
									className='inline-block opacity-20 mt-3 text-sm'
									onClick={() =>
										setType(type === 'login' ? 'register' : 'login')
									}
								>
									{type === 'login' ? 'register' : 'login'}
								</button>
							</div>
						</>
					)}
				</form>
			</section>
		</Meta>
	);
};

export default Auth;
