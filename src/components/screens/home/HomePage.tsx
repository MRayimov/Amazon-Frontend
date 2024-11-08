import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { TypePaginationProducts } from '@/types/product.interface';
import Catalog from '@/ui/catalog/Catalog';
import Heading from '@/ui/Heading';
import Layout from '@/ui/layout/Layout';
import Meta from '@/ui/Meta';
import { FC } from 'react';

const HomePage: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth();
	const { logout } = useActions();
	return (
		<Layout>
			<Meta title='Home'>
				{!!user && <button onClick={() => logout()}>Logout</button>}

				<Catalog title='Freshed Products' products={products || []} />
			</Meta>
		</Layout>
	);
};

export default HomePage;
