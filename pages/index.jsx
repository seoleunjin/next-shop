import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/product-list/ProductList';
import axios from 'axios';
import { use, useEffect, useState } from 'react';

function ProductPage() {
	const headerTitle = '상품 목록 페이지';
	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductList></ProductList>
		</div>
	);
}

export default ProductPage;
