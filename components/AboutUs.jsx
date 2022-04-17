import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
	return (
		<section
			className='mt-[-6rem] pt-48 md:mt-[-4rem] md:pt-40 grid justify-items-center tracking-widest '
			id='AboutUs'
		>
			<h2 className='font-bold text-3xl pb-4'>Meet The Doctors</h2>
			<h3 className=' text-xl pb-8 italic'>Learn Who We Are</h3>
			<div className='grid lg:grid-cols-2 mx-4'>
				<div className='grid  mx-4 p-4 max-h-sm justify-items-center lg:mx-0 lg:grid-rows-3 overflow-hidden relative'>
					<div className='h-96'>
						<Image
							src='/drlieu.jpg'
							alt=''
							className='object-contain justify-self-center mb-4 h-72 lg:row-span-1 rounded-lg'
							// width='220'
							// height='100'
							layout='fill'
							objectFit='cover'
						/>
						{/* <img
						src='/drlieu.jpg'
						alt=''
						className='object-contain justify-self-center mb-4 h-72 lg:row-span-1 rounded-lg'
						// width='200'
					/> */}
					</div>
					<div className='bg-secondaryColor  rounded-lg border border-thirdColor p-4 max-w-xl lg:row-start-2 lg:row-end-4 shadow-2xl'>
						<h3 className='font-bold text-lg mb-4 text-center'>
							Dr. Megan Lieu
						</h3>
						<h4 className='text-sm pb-4'>
							Dr. Megan Lieu has been a long-time resident of Orange County. She
							graduated from the University of California, Irvine with a
							Bachelor of Science degree in Biology. She left California briefly
							to pursue her Doctorate of Optometry at the Illinois College of
							Optometry in Chicago. Dr. Lieu completed her externships at the
							following locations:
						</h4>
						<ul className='list-disc px-4 pb-4'>
							<li className='text-sm'>
								{
									'Daytona Beach Outpatient VA Clinic (Primary Care and Low Vision)'
								}
							</li>
							<li className='text-sm'>
								{
									'University of Chicago, DCAM (Emergency and Pediatric Care, Neurological and Retinal Services)'
								}
							</li>
							<li className='text-sm'>
								{
									'VA Hudson Valley Health Care System (Primary Care and Ocular Disease with emphasis on glaucoma, diabetic and hypertensive retinopathy)'
								}
							</li>
							<li className='text-sm'>
								{
									'Illinois Eye Institute (Contact Lenses, Pediatric/Binocular Vision)'
								}
							</li>
						</ul>
						<h4 className='text-sm pb-4'>
							She also has experience with refractive, cataract and pterygium
							surgery when she worked at the Laser Eye Canter.
						</h4>
						<h4 className='text-sm'>
							Dr. Lieu partakes in the One Sight Program, providing
							complimentary comprehensive exams and eyewear to the
							underprivileged members of our community. Her favorite part of
							practicing Optometry is seeing a patient's face light up in the
							exam room with a new prescription. When time permits, Dr. Lieu
							takes pleasure in traveling, gardening, drawing and spending time
							with family and friends.
						</h4>
					</div>
				</div>
				<div className='grid  mx-4 p-4 max-h-sm justify-items-center lg:mx-0 max-w-xl lg:grid-rows-3'>
					<Image
						src='/drle.jpg.png'
						alt='Dr. Le headshot'
						className='object-contain justify-self-center mb-4 h-72 rounded-lg '
						width='200'
						height='100'
					/>
					{/* <img
						src='/drle.jpg.png'
						alt=''
						className='object-contain justify-self-center mb-4 h-72 rounded-lg'
						// width='200'
					/> */}
					<div className='bg-secondaryColor border rounded-lg border-thirdColor p-4 lg:row-start-2 lg:row-end-3 shadow-2xl'>
						<h3 className='font-bold text-lg mb-4 text-center'>Dr. Laura Le</h3>
						<h4 className='text-sm'>
							Dr. Laura Le graduated from the University of California, San
							Diego with a Bachelor of Arts degree in Psychology. She then went
							on to attain her Doctorate of Optometry degree from the Southern
							California College of Optometry. She is board certified to treat
							eye diseases, including glaucoma and is experienced in refractive
							surgery/cataract surgery co-management. Dr. Le is here to provide
							professional eyecare near you and believes in quality care that
							comes from the relationship between doctor and patients. In her
							spare time, she enjoys spending time with her family and her
							French bulldog.
						</h4>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
