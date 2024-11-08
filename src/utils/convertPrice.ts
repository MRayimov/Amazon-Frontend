export const convertPrice = (price: number) => {
	// return price.toLocaleString('us-US', {
	// 	style: 'currency',
	// 	currency: 'USD',
	// });
	return Intl.NumberFormat('us-US', {
		style: 'currency',
		currency: 'USD',
	}).format(price);
};
