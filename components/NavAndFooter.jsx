// import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { socialMedia } from '../utils'

import { Link } from 'react-scroll/modules'

const NavAndFooter = ({ children }) => {
	return (
		<>
			<header className='grid md:grid-cols-3 md:mx-4 py-4 md:py-8 md:gap-4 items-center  border-b sticky top-0 right-0 left-0 bg-mainColor h-40 md:h-32'>
				<div className='md:col-span-1  mx-auto'>
					<Link
						to='Hero'
						smooth={true}
						duration={1000}
						className='md:col-span-1  mx-auto'
					>
						<img
							src='/logo.gif'
							width={200}
							height={100}
							className='object-contain cursor-pointer '
						/>
					</Link>
				</div>
				{/* Nav Items */}
				<div className='grid mt-4 md:mt-0 grid-cols-5 gap-x-8 justify-items-center mx-4 md:mx-0 md:col-span-2 md:text-lg lg:text-xl xl:text-2xl'>
					<Link
						to='Hero'
						smooth={true}
						duration={1000}
						className=' hover:text-secondaryColor transition ease-in-out sm:tracking-widest  w-20 text-center cursor-pointer '
					>
						Home
					</Link>

					<Link
						to='AboutUs'
						smooth={true}
						duration={1000}
						className=' hover:text-secondaryColor transition ease-in-out sm:tracking-widest whitespace-nowrap  w-20 text-center cursor-pointer'
					>
						About Us
					</Link>

					<Link
						className=' hover:text-secondaryColor transition ease-in-out sm:tracking-widest  w-20 text-center cursor-pointer'
						to='Services'
						smooth={true}
						duration={1000}
					>
						Services
					</Link>

					<Link
						className=' hover:text-secondaryColor transition ease-in-out sm:tracking-widest  w-20 text-center cursor-pointer'
						to='Products'
						smooth={true}
						duration={1000}
					>
						Products
					</Link>

					<Link
						className=' hover:text-secondaryColor transition ease-in-out sm:tracking-widest  w-20 text-center cursor-pointer'
						to='Contact'
						smooth={true}
						duration={1000}
					>
						Contact
					</Link>
				</div>
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
