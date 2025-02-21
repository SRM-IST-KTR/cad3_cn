import Head from 'next/head';
import Navbar from '../components/Shared/Navbar/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Sponsors from '../components/Sponsors';
import Prizes from '../components/Prizes';
import PastEvents from '../components/pastEvents';

export default function Home() {
	return (
		<div>
			<Head>
				<title>CDA 3.0</title>
				<meta
					name="description"
					content="Welcome to my event"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Navbar />
			<Hero />
			<About />
			<Schedule />
			<Sponsors />
			<Prizes />
			<PastEvents />
		</div>
	);
}
