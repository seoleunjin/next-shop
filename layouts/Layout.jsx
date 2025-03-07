import Link from 'next/link';

function Layout({ children }) {
	return (
		<div>
			<nav>
				<Link href="/">상품목록</Link> | <Link href="/cart">장바구니</Link>
			</nav>
			{/* 나머지 컴포넌트 불러오기 */}
			<div>{children}</div>
		</div>
	);
}

export default Layout;
