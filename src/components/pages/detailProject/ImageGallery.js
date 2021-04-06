import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import './ImageGallery.css'
import { useSelector } from 'react-redux'

const ImageGallery = (props) => {
	const [[page, direction], setPage] = useState([0, 0])

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection])
	}
	let renderImg = 'https://image.freepik.com/free-vector/home-interior-background-theme_23-2148612103.jpg'
	const showcaseGallery = useSelector((state) => state.showcaseReducer.showcaseDetail.gallery)
	const galleryData = showcaseGallery.map((pic) => pic.photo)

	const imageIndex = wrap(0, galleryData.length, page)
	return (
		<div className='gallery-wrapper'>
			<div className='gallery-btn-close'>
				<button onClick={() => props.setIsOpen(false)}>
					<AiOutlineClose />
				</button>
			</div>
			<div className='gallery-container'>
				<div className='prev-btn'>
					<motion.button whileHover={{ scale: 1.05, transition: { duration: 0.5 } }} whileTap={{ scale: 0.9 }} className='prev arrow' onClick={() => paginate(-1)}>
						<BsFillCaretLeftFill />
					</motion.button>
				</div>
				<div className='photo-container'>
					<AnimatePresence initial={false} custom={direction}>
						<motion.img
							className='photo'
							key={page}
							src={!showcaseGallery ? renderImg : galleryData[imageIndex]}
							custom={direction}
							initial={{ x: 0, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{
								x: { type: 'spring', stiffness: 300, damping: 100 },
								opacity: { duration: 0.2 },
							}}
							drag='x'
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={1}
						/>
					</AnimatePresence>
				</div>
				<div className='next-btn'>
					<motion.button whileHover={{ scale: 1.05, transition: { duration: 0.5 } }} whileTap={{ scale: 0.9 }} className='next arrow' onClick={() => paginate(1)}>
						<BsFillCaretRightFill />
					</motion.button>
				</div>
			</div>
		</div>
	)
}

export default ImageGallery
