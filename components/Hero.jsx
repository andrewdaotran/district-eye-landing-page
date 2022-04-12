import React from 'react'
import Link from 'next/link'

const Hero = () => {
	return (
		<section className='grid justify-items-center mx-8'>
			<h1 className='text-center font-bold text-xl my-8 tracking-wide'>
				WE ARE THE <span className='text-[#b6b0aa]'>CLEAR</span> CHOICE FOR
				<span className='block text-center font-bold text-3xl sm:text-6xl text-fourthColor mt-4 tracking-widest'>
					YOUR VISION NEEDS
				</span>
			</h1>
			<h3 className='text-center'>
				We actively strive to achieve excellence by providing quality eye care
				in a professional and personalized setting.
			</h3>
			{/* Button */}
			<Link href='#Contact'>
				<a className=' mt-8 outline outline-thirdColor px-4 py-2 rounded-md transition ease-in-out bg-secondaryColor hover:bg-mainColor'>
					Book An Appointment
				</a>
			</Link>

			<div className='flex mt-8 flex-col items-center w-full md:justify-evenly md:flex-row '>
				<div className='text-center '>
					<p className='font-bold text-lg'>Hours of Operation:</p>
					<p className=''>Monday through Saturdays</p>
					<p className=''>10:00am - 6:00pm</p>
				</div>
				<div className='mt-8 md:mt-0 text-center'>
					<p className=''>2831 Park Ave</p>
					<p className=''>Tustin, CA 92782</p>
					<p className='font-bold text-lg'>(714) 258-7525</p>
				</div>
			</div>

			<img
				src='/north-shore-picture.jpg'
				alt=''
				className='mt-12 rounded-md '
			/>
		</section>
	)
}

export default Hero
