import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Jokes from '../components/jokegenerator/Jokes'

const Home: NextPage = () => {
	const { data: session } = useSession()
	const user = session?.user
	return (
		<div>
			<Head>
				<title>DadJoke Generator</title>
				<meta name='description' content='A dadjoke generator' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Jokes />
			</main>
		</div>
	)
}

export default Home
