import React, { useEffect, useState, useRef, useContext } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
import emailjs from '@emailjs/browser'
import ModalContext from '../contexts/ModalContext'

const Contact = () => {
	const fullConfig = resolveConfig(tailwindConfig)
	const [formData, setFormData] = useState({
		name: '',
		phoneNumber: '',
		email: '',
		reason: '',
	})
	const [allFieldsBool, setAllFieldsBool] = useState(false)
	const [nameBool, setNameBool] = useState(false)
	const [phoneBool, setPhoneBool] = useState(false)
	const [emailBool, setEmailBool] = useState(false)
	const [reasonBool, setReasonBool] = useState(false)
	const [screenSize, setScreenSize] = useState(0)
	const { isModalOpen, openModal } = useContext(ModalContext)
	const form = useRef()

	// Change field colors back to normal when user fills
	useEffect(() => {
		if (formData.name !== '') {
			setNameBool(false)
		}
		if (formData.phoneNumber !== '') {
			setPhoneBool(false)
		}
		if (formData.email !== '') {
			setEmailBool(false)
		}
		if (formData.reason !== '') {
			setReasonBool(false)
		}
		if (
			formData.name &&
			formData.phoneNumber &&
			formData.email &&
			formData.reason !== ''
		) {
			setAllFieldsBool(false)
		}
	}, [formData])

	const handleForm = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const submitForm = async (e) => {
		e.preventDefault()

		// Check if fields are filled, if not then change the field not filled to red background color
		if (formData.name === '') {
			setAllFieldsBool(true)
			setNameBool(true)
		}
		if (formData.phoneNumber === '') {
			setAllFieldsBool(true)
			setPhoneBool(true)
			console.log('hello')
		}
		if (formData.email === '') {
			setAllFieldsBool(true)
			setEmailBool(true)
		}
		if (formData.reason === '') {
			setAllFieldsBool(true)
			setReasonBool(true)
			console.log('hey')
		}

		if (
			formData.name &&
			formData.phoneNumber &&
			formData.email &&
			formData.reason !== ''
		) {
			// Emailjs Function
			emailjs
				.sendForm(
					'service_4fag3uj',
					'template_58o4f4x',
					form.current,
					'YQL2ADzf13Rdpq0f2'
				)
				.then(
					(result) => {
						// Open Modal after submission
						openModal()
					},
					(error) => {
						console.log(error.text)
					}
				)

			// Clear form after submission
			setFormData({
				name: '',
				phoneNumber: '',
				email: '',
				reason: '',
			})
		}
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
		<section
			className={` mx-4 mt-[-6rem] pt-48 md:mt-[-4rem] md:pt-40`}
			id='Contact'
		>
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
					<span className='text-thirdColor italic '>
						vision@thedistricteye.com
					</span>
					, call us at{' '}
					<span className='text-thirdColor italic '>(714) 258-7525</span>, or
					use the form below to book an appointment.
				</h4>
				{/* Form and Map Container */}
				<div className='grid xl:grid-cols-2 xl:gap-8 max-w-7xl mx-auto'>
					{/* Form */}
					<form
						className='grid grid-cols-5 border border-thirdColor sm:mx-auto md:w-[39rem] shadow-2xl rounded-md mb-8 xl:mb-0'
						method='post'
						ref={form}
						onSubmit={submitForm}
					>
						<div className=' p-4  grid gap-4 col-span-2'>
							<h5>
								Name<span className='text-redColor'>*</span>:
							</h5>
							<h5 className=''>
								Phone Number<span className='text-redColor'>*</span>:
							</h5>
							<h5>
								Email<span className='text-redColor'>*</span> :
							</h5>
							<h5 className='h-60  sm:h-48 md:pt-4'>
								Please specify when you would like to come in. Our hours are
								<span className='text-redColor'>*</span>:
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
								placeholder={`${nameBool ? '' : 'John Doe'}`}
								className={` border px-2 h-6 rounded-md w-full ${
									nameBool ? ' bg-[#ff6868] ' : null
								}`}
								value={formData.name}
								name='name'
								onChange={handleForm}
							/>
							<input
								type='tel'
								placeholder={`${phoneBool ? '' : '123-456-7890'}`}
								className={`border  px-2 h-6 w-full rounded-md ${
									phoneBool ? ' bg-[#ff6868] ' : null
								}`}
								value={formData.phoneNumber}
								name='phoneNumber'
								onChange={handleForm}
							/>
							<input
								type='email'
								placeholder={`${emailBool ? '' : 'email@example.com'}`}
								className={`border  px-2 w-full rounded-md ${
									emailBool ? ' bg-[#ff6868] ' : null
								}`}
								value={formData.email}
								name='email'
								onChange={handleForm}
							/>
							<textarea
								type='text'
								placeholder={`${
									reasonBool
										? ''
										: 'I am due for my annual eye exam and am looking to get a new pair of glasses. I am insured by VSP and will be a new patient.'
								}`}
								className={`border h-60  sm:h-48 w-full resize-none px-2 rounded-md ${
									reasonBool ? ' bg-[#ff6868] ' : null
								}`}
								value={formData.reason}
								name='reason'
								onChange={handleForm}
							/>
						</div>
						{allFieldsBool ? (
							<h5 className='col-start-1 col-end-4 pl-4 text-redColor'>
								Please fill out all fields.
							</h5>
						) : null}

						<button className='col-start-4 col-end-5  mb-4 rounded-md bg-secondaryColor hover:bg-mainColor border border-thirdColor px-2 py-1  transition ease-in-out'>
							Submit
						</button>
					</form>
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
		</section>
	)
}

export default Contact
