import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
});

// 상품 목록을 조회하는 API함수
function fetchProducts() {
	return instance.get(`/products`);
}
// 특정 상품 상세 정보를 조회하는 API 함수
function fetchProductById(id) {
	return instance.get(`/products/${id}`);
}

// fetchProducts 와 fetchProductById를 합쳐서 사용가능
// function fetchProducts(productId) {
//   return instance.get(`/products`, {
//     params: {
//       id: productId,
//     },
//   });
// }

// 장바구니의 아이템을 추가하는 API 함수
function createCartItem(id, name) {
	return instance.post(`/carts`, {
		id: id,
		name: name,
	});
}

export { fetchProducts, fetchProductById, createCartItem };

// CRUD{Create, Read, Update, Delete}
// create - 생성
// delete - 삭제
// update - 수정
// get - 조회

// instance.dele
// axios.get()
// axios.dele
