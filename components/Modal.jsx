import React, { useContext, useEffect } from 'react'
import { Icon } from 'react-icons-kit'
import { close } from 'react-icons-kit/fa/close'

import { socialMedia } from '../utils'
import ModalContext from '../contexts/ModalContext'

const Modal = () => {
	const { isModalOpen, closeModal } = useContext(ModalContext)

	// useEffect(() => {
	// 	isModalOpen && document.body.style.overflow === 'hidden'
	// 	!isModalOpen && document.body.style.overflow === 'unset'
	// }, [isModalOpen])
	return isModalOpen ? (
		<div
			className='fixed inset-0 bg-mainColor bg-opacity-50 flex justify-center items-center h-screen overflow-y-hidden'
			onClick={closeModal}
		>
			{/* <div className=''> */}
			<div className='border border-thirdColor rounded-md grid mx-auto bg-secondaryColor  text-center relative px-8 '>
				<button onClick={closeModal}>
					<Icon
						icon={close}
						className='hover:text-mainColor transition ease-in-out cursor-pointer absolute top-2 right-4'
						size={25}
					/>
				</button>
				<h3 className='mb-2 mt-8 font-bold text-xl'>
					Thank you for your appointment request!
				</h3>
				<h3 className='mb-2'>
					We will contact you shortly to schedule an appointment with you.
				</h3>
				<h3 className='mb-4'>Look out for our call!</h3>
				<div className='grid py-4 my-4 justify-items-center border-t'>
					<h3 className='mb-4 text-center'>Connect with us on:</h3>
					{/* Social Media Icons */}
					<div className='flex justify-around w-80 '>
						{socialMedia.map((item) => {
							return (
								<a key={item.id} target='_blank' href={item.link}>
									<Icon
										icon={item.app}
										size={30}
										className='hover:text-mainColor transition ease-in-out cursor-pointer'
									/>
								</a>
							)
						})}
					</div>
				</div>
			</div>
			{/* </div> */}
		</div>
	) : null
}

export default Modal
