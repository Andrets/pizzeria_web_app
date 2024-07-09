import PropTypes from 'prop-types'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.css'

export const Carousel = ({ images }) => {
	const initialSlideIndex = Math.floor(images.length / 2);
	return (
		<Swiper
			spaceBetween={16}
			centeredSlides={true}
			slidesPerView={'auto'}
			initialSlide={initialSlideIndex}
			className={styles.slider}
			freeMode={true}
			modules={[FreeMode]}
		>
			{images.length > 1 ? (
				images.map((image, index) => (
					<SwiperSlide
						key={index}
						className={`${styles.slide} ${index === 0 ? styles.firstSlide : ''} ${index === images.length - 1 ? styles.lastSlide : ''}`}
					>
						<img className={styles.image} src={image === 'img/soul.png' ? 'img/card_soul.png' : image} />
					</SwiperSlide>
				))
			) : (
				<SwiperSlide>
					<img className={styles.image} src={images[0]} />
				</SwiperSlide>
			)}
		</Swiper>
	);
};

Carousel.propTypes = {
	images: PropTypes.array.isRequired
};