import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { facebook } from 'react-icons-kit/fa/facebook'
import { instagram } from 'react-icons-kit/fa/instagram'
import { yelp } from 'react-icons-kit/fa/yelp'

import * as Scroll from 'react-scroll'
// import {
// 	Link,
// 	Button,
// 	Element,
// 	Events,
// 	animateScroll as scroll,
// 	scrollSpy,
// 	scroller,
// } from 'react-scroll'

const NavAndFooter = ({ children }) => {
	const socialMedia = [
		{
			id: 'facebook',
			app: facebook,
			link: 'https://www.facebook.com/thedistricteyecare',
		},
		{
			id: 'instagram',
			app: instagram,
			link: 'https://www.instagram.com/thedistricteyecare/',
		},
		{
			id: 'yelp',
			app: yelp,
			link: 'https://www.yelp.com/biz/the-district-eye-care-optometry-tustin-3',
		},
	]
	return (
		<>
			<header className='grid md:grid-cols-3 md:mx-4 py-4 md:py-8 md:gap-4 items-center  border-b sticky top-0 bg-mainColor'>
				<div className='md:col-span-1  mx-auto'>
					<Link href='/' className='md:col-span-1  mx-auto'>
						<img
							src='/logo.gif'
							width={200}
							height={100}
							className='object-contain cursor-pointer '
						/>
					</Link>
				</div>
				{/* Nav Items */}
				<ul className='grid mt-4 md:mt-0 grid-cols-5 gap-x-8 justify-items-center mx-4 md:mx-0 md:col-span-2 '>
					<li>
						<Link href='/'>
							<a className=' hover:text-secondaryColor transition ease-in-out sm:tracking-widest  w-20 text-center'>
								Home
							</a>
						</Link>
					</li>
					<li>
						<a
							href='#AboutUs'
							className=' hover:text-secondaryColor transition ease-in-out sm:tracking-widest whitespace-nowrap  w-20 text-center'
						>
							About Us
						</a>
					</li>
					<li>
						<a
							className=' hover:text-secondaryColor transition ease-in-out sm:tracking-widest  w-20 text-center'
							href='#Services'
						>
							Services
						</a>
					</li>
					<li>
						<a
							className=' hover:text-secondaryColor transition ease-in-out sm:tracking-widest  w-20 text-center'
							href='#Products'
						>
							Products
						</a>
					</li>
					<li>
						<a
							className=' hover:text-secondaryColor transition ease-in-out sm:tracking-widest  w-20 text-center'
							href='#Contact'
						>
							Contact
						</a>
					</li>
				</ul>
			</header>
			{children}
			<footer className='grid py-8 mx-4 justify-items-center mt-12 border-t'>
				<h3 className='mb-4 text-center'>Connect with us on:</h3>
				{/* Social Media Icons */}
				<div className='flex justify-around w-80 mb-4 '>
					{socialMedia.map((item) => {
						return (
							<a key={item.id} target='_blank' href={item.link}>
								<Icon
									icon={item.app}
									size={30}
									className='hover:text-secondaryColor transition ease-in-out cursor-pointer'
								/>
							</a>
						)
					})}
				</div>
				<h3 className='text-center'>
					2012 The District Eye Care. All Rights Reserved.
				</h3>
			</footer>
		</>
	)
}

export default NavAndFooter
