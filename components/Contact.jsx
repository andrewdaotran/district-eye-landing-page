import React, { useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const Contact = () => {
	const fullConfig = resolveConfig(tailwindConfig)
	const [formData, setFormData] = useState({
		name: '',
		phoneNumber: '',
		email: '',
		reason: '',
	})
	const [screenSize, setScreenSize] = useState(0)

	const API_KEY = 'AIzaSyB_BV6uPvZMnBaeRS2oXtjUJy1mW-Hst1I'

	const handleForm = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const submitForm = (e) => {
		e.preventDefault()
		if (
			formData.name === '' ||
			formData.phoneNumber === '' ||
			formData.email === '' ||
			formData.reason === ''
		)
			return

		setFormData({
			name: '',
			phoneNumber: '',
			email: '',
			reason: '',
		})
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			function handleResize() {
				setScreenSize({
					screenSize: window.innerWidth,
				})
			}

			// Add event listener
			window.addEventListener('resize', handleResize)

			// Call handler right away so state gets updated with initial window size
			handleResize()

			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<section className=' mx-4 mt-24 ' id='Contact'>
			{/* Contact Header */}
			<div className=''>
				<h3 className='font-bold  text-3xl tracking-widest text-center pb-4 '>
					Book an Appointment
				</h3>
				<h3 className=' text-xl mb-4 italic tracking-widest text-center'>
					Join the Family
				</h3>
				<h4 className='text-center mb-2'>
					We are conveniently located between Whole Foods and T.J. Maxx/Home
					Goods in the{' '}
					<span className='text-thirdColor italic'>
						District Shopping Center
					</span>{' '}
					.
				</h4>
				<h4 className='text-center mb-8'>
					Email us at{' '}
					<span className='text-thirdColor italic'>
						vision@thedistricteye.com
					</span>{' '}
					to book an appointment or use the form below.
				</h4>
				{/* Form and Map Container */}
				<div className='grid xl:grid-cols-2 xl:gap-8 max-w-7xl mx-auto'>
					{/* Form */}
					<div className='grid grid-cols-5 border border-thirdColor sm:mx-auto md:w-[39rem] shadow-2xl rounded-md mb-8 xl:mb-0'>
						<div className='  p-4  grid gap-4 col-span-2'>
							<h5>Name*:</h5>
							<h5>Phone Number*:</h5>
							<h5>Email*:</h5>
							<h5 className='h-60  sm:h-48 md:pt-4'>
								Please specify when you would like to come in. Our hours are*:
								<span className='block pt-4'>
									Monday through Saturday
									{`${screenSize.screenSize}px` >= fullConfig.theme.screens.sm
										? ' 10am - 6pm'
										: ' 10:00am - 6:00pm'}
								</span>
							</h5>
						</div>
						<div className='  p-4 grid gap-4 col-span-3'>
							<input
								type='text'
								placeholder='John Doe'
								className=' border px-2 h-6 rounded-md w-full'
								value={formData.name}
								name='name'
								onChange={handleForm}
							/>
							<input
								type='tel'
								placeholder='123-456-7890'
								className=' border  px-2 h-6 w-full rounded-md'
								value={formData.phoneNumber}
								name='phoneNumber'
								onChange={handleForm}
							/>
							<input
								type='email'
								placeholder='email@example.com'
								className=' border  px-2 w-full rounded-md'
								value={formData.email}
								name='email'
								onChange={handleForm}
							/>
							<textarea
								type='text'
								className=' border h-60  sm:h-48 w-full resize-none px-2 rounded-md'
								value={formData.reason}
								name='reason'
								onChange={handleForm}
							/>
						</div>
						<button
							className='col-start-4 col-end-5  mb-4 rounded-md bg-secondaryColor hover:bg-mainColor outline outline-thirdColor px-2 py-1  transition ease-in-out'
							onClick={submitForm}
						>
							Submit
						</button>
					</div>
					{/* Map */}
					<div className=''>
						<iframe
							className='rounded-md border border-thirdColor w-full shadow-2xl xl:h-full col-start-2 md:w-[39rem] sm:mx-auto  h-[30rem]'
							// width='600'
							// height='450'
							// style='border:0'
							loading='lazy'
							// allowfullscreen
							// referrerpolicy='no-referrer-when-downgrade'
							src='https://www.google.com/maps/embed/v1/place?key=AIzaSyB_BV6uPvZMnBaeRS2oXtjUJy1mW-Hst1I
    &q=2831 Park Ave Tustin, CA 92782'
						></iframe>
					</div>
				</div>
			</div>
			{/* Right Side */}
			<div className=''></div>
		</section>
	)
}

export default Contact
