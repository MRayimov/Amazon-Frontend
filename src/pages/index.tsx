import HomePage from '@/screens/home/HomePage';
import { ProductService } from '@/services/product/product.service';
import { TypePaginationProducts } from '@/types/product.interface';
import { GetStaticProps, NextPage } from 'next';

const Home: NextPage<TypePaginationProducts> = ({ length, products }) => {
	return <HomePage products={products} length={length} />;
};

export default Home;
export const getStaticProps: GetStaticProps<
	TypePaginationProducts
> = async () => {
	const { data } = await ProductService.getAll({
		page: 1,
		perPage: 4,
	});
	return {
		props: data,
	};
};
