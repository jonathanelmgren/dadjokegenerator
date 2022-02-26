import { useSession } from 'next-auth/react'



const Jokes = () => {
	const { data: session, status } = useSession()

	return <nav>Jokes</nav>
}

export default Jokes
