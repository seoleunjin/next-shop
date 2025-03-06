import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
	const router = useRouter();

	const addCart = async () => {
		// 1. 장바구니에 아이템을 담는 API함수 호출
		// 2. 장바구니 페이지로 이동
		const respone = await createCartItem(productDetail.id, productDetail.name);
		console.log(respone);
		alert('장바구니에 추가됨');
		router.push('/cart');
	};

	return (
		<div className={styles.container}>
			<div>
				<Image
					src={productDetail.imageUrl}
					width={250}
					height={250}
					alt={productDetail.name}
				/>
			</div>
			<div className={styles.description}>
				<p>{productDetail.name}</p>
				<p>{productDetail.price}</p>
				<button onClick={addCart}>장바구니에 담기</button>
			</div>
		</div>
	);
}
