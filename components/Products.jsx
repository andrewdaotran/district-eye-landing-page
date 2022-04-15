import React from 'react'

const Products = () => {
	return (
		<div className='mt-[-6rem] pt-48 md:mt-[-4rem] md:pt-40' id='Products'>
			<h2
				className='font-bold text-3xl pb-4 tracking-widest text-center'
				id='Services'
			>
				Our Products
			</h2>
			<h3 className=' text-xl pb-8 italic tracking-widest text-center'>
				What We Carry
			</h3>
			<div className='mx-4 grid justify-items-center'>
				<img src='/products.png' alt='glasses brands' className='' />
			</div>
			<h4 className='text-center mt-8 text-thirdColor '>
				We also carry a large range of frames for the budget conscious patient.
			</h4>
		</div>
	)
}

export default Products
