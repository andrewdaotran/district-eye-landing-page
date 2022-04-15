import Head from 'next/head'
import NavAndFooter from '../components/NavAndFooter'
import AboutUs from '../components/AboutUs'
import Contact from '../components//Contact'
import Hero from '../components//Hero'
import Modal from '../components//Modal'
import Products from '../components//Products'
import Services from '../components//Services'
import { ModalProvider } from '../contexts/ModalContext'

export default function Home() {
	return (
		<div className='font-rajdhani'>
			<Head>
				<title>District Eye Care</title>
				<meta
					name='description'
					content='District Eye Care · Book an Appointment. 2831 Park Ave Tustin, CA 92782 (714) 258-7525. Hours of Operation: Monday through Saturdays 10:00am - 6:00pm.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<NavAndFooter>
				<ModalProvider>
					<Modal />
					<Hero />
					<AboutUs />
					<Services />
					<Products />
					<Contact />
				</ModalProvider>
			</NavAndFooter>
		</div>
	)
}
