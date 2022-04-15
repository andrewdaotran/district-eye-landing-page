import { createContext, useState } from 'react'
const ModalContext = createContext()
export const ModalProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const closeModal = () => {
		setIsModalOpen(false)
	}
	const openModal = () => {
		setIsModalOpen(true)
	}
	return (
		<ModalContext.Provider value={{ isModalOpen, closeModal, openModal }}>
			{children}
		</ModalContext.Provider>
	)
}

export default ModalContext
