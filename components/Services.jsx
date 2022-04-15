import React from 'react'
import { Icon } from 'react-icons-kit'
import { creditCard } from 'react-icons-kit/fa/creditCard'
import { shield } from 'react-icons-kit/fa/shield'
import { language } from 'react-icons-kit/fa/language'

import { languages, paymentForms, insurances } from '../utils'

const Services = () => {
	return (
		<section
			className='mt-[-6rem] pt-48 md:mt-[-4rem] md:pt-40 grid justify-items-center tracking-widest'
			id='Services'
		>
			<h2 className='font-bold text-3xl pb-4' id='Services'>
				Our Services
			</h2>
			<h3 className=' text-xl pb-8 italic'>What We Do</h3>
			{/* Services List */}
			<ul className='mx-8 border border-thirdColor rounded-md p-4 md:px-8 list-disc list-inside shadow-2xl mb-12 max-w-2xl'>
				<li className='text-xl  mb-4  '>
					<span className='text-thirdColor  '>Comprehensive eye exams </span>
					for adults and children, which includes a dilation
				</li>
				<li className='text-xl  mb-4  '>
					<span className='text-thirdColor  '>Contact lens exams </span>
					for new and existing wearers, including soft, disposables, torics,
					multifocals, and RGPs (aka hard lenses)
				</li>
				<li className='text-xl  mb-4  '>
					<span className='text-thirdColor  '>Diagnosis and Treatment </span> of
					Ocular Disease
				</li>
				<li className='text-xl  mb-4  '>
					Outside <span className='text-thirdColor  '>Prescriptions </span>
					filled
				</li>
				<li className='text-xl  mb-4  '>
					<span className='text-thirdColor  '>Eyeglass </span>
					repairs and adjustments
				</li>
				<li className='text-xl  mb-4  '>
					<span className='text-thirdColor  '>LASIK </span>
					consultations and co-management
				</li>
			</ul>
			{/* Service Boxes */}
			<div className='grid mx-8 gap-y-16 md:gap-y-24 lg:grid-cols-3 lg:gap-x-12 xl:gap-x-32 justify-items-center'>
				{/* Insurance Plans */}
				<div className='grid md:grid-cols-2 lg:grid-cols-none justify-items-center items-center lg:order-2'>
					<div className=' pb-8 md:pb-0 lg:pb-8'>
						<Icon icon={shield} size={125} />
					</div>
					<div className='rounded-lg border border-thirdColor  max-w-xs shadow-2xl '>
						<div className='w-full border-b border-thirdColor p-4 h-14 bg-secondaryColor rounded-t-lg '>
							<h4 className='text-center self-center text-thirdColor'>
								Insurance Plans
							</h4>
						</div>
						<div className='p-4'>
							<h5 className='mb-4 font-bold text-center'>
								We accept most major insurance plans including:
							</h5>
							<ul className='grid grid-cols-2 gap-4'>
								{insurances.map((insurance) => {
									return (
										<li key={insurance} className=''>
											{insurance}
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
				{/* Languages Spoken */}
				<div className='grid md:grid-cols-2 lg:grid-cols-none justify-items-center items-center lg:order-1'>
					<div className='md:order-2 lg:order-1 pb-8 md:pb-0 lg:pb-8'>
						<Icon icon={language} size={125} />
					</div>
					<div className='rounded-lg border border-thirdColor  max-w-xs  shadow-2xl lg:order-2'>
						<div className='w-full border-b p-4 h-14 bg-secondaryColor rounded-t-lg border-thirdColor'>
							<h4 className='text-center self-center text-thirdColor'>
								Languages Spoken
							</h4>
						</div>
						<div className='p-4'>
							<h5 className='mb-4 font-bold text-center'>
								Some languages that we speak:
							</h5>
							<ul className='grid grid-cols-2 gap-4 pb-6'>
								{languages.map((language) => {
									return (
										<li key={language} className=''>
											{language}
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
				{/* Payment Forms */}
				<div className='grid md:grid-cols-2 lg:grid-cols-none justify-items-center items-center lg:order-3'>
					<div className='text-fourthColor pb-8 md:pb-0 lg:pb-8'>
						<Icon icon={creditCard} size={125} />
					</div>
					<div className='rounded-lg border border-thirdColor max-w-xs  shadow-2xl '>
						<div className='w-full border-b p-4 h-14 bg-secondaryColor rounded-t-lg border-thirdColor'>
							<h4 className='text-center self-center text-thirdColor'>
								Payment Forms
							</h4>
						</div>
						<div className='p-4'>
							<h5 className='mb-4 font-bold text-center'>
								We accept all forms of payment:
							</h5>
							<ul className='grid grid-cols-2 gap-4'>
								{paymentForms.map((payment) => {
									return (
										<li key={payment} className=''>
											{payment}
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
