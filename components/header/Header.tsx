import { useSession } from 'next-auth/react'



const Header = () => {
	const { data: session, status } = useSession()

	return <nav>Header</nav>
}

export default Header
