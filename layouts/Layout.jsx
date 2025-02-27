import Link from 'next/link';

function Layout({ children }) {
	return (
		<div>
			<nav>
				<Link href="/">Product</Link> | <Link href="/cart">List</Link>
			</nav>
			<div>{children}</div>
		</div>
	);
}

export default Layout;
