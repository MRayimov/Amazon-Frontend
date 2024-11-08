import { IProduct } from '@/types/product.interface';
import { Spinner } from '@nextui-org/react';
import { FC } from 'react';
import Heading from '../Heading';
import ProductItem from './product-item/ProductItem';

interface ICatalog {
	products: IProduct[];
	isLoading?: boolean;
	title?: string;
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <Spinner color='warning' />;
	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			{products.length ? (
				<div className='grid grid-cols-4 gap-10'>
					{products.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<div>There are no products</div>
			)}
		</section>
	);
};
export default Catalog;
