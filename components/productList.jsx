import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './productList.module.css';
import Link from 'next/link';

function ProductList() {
	const [products, setProducts] = useState();

	// 클라이언트사이드 렌더링 시작
	useEffect(() => {
		axios.get('http://localhost:4000/products').then(response => {
			setProducts(response.data);
		});
	}, []);

	// 클라이언트사이드 렌더링 끝

	console.log(products);

	return (
		<ul>
			{products &&
				products.map(product => {
					return (
						<li key={product.id} className={styles.item}>
							<Link href={`/products/${product.id}`}>
								<div>
									<Image
										src={product.imageUrl}
										width={300}
										height={250}
										alt={product.name}
									/>
								</div>
								<div>{product.name}</div>
							</Link>
						</li>
					);
				})}
		</ul>
	);
}

export default ProductList;
