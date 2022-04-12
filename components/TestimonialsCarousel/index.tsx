/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Carousel from 'react-grid-carousel'
import styles from './TestimonialsCarousal.module.css'

function TestimonialsCarousel() {
	return (
		<Carousel showDots={true} cols={1} rows={1} autoplay={3000} loop={true}>
			<Carousel.Item>
				<img
					src='/assets/images/careers-page-testimonial-1.jpg'
					alt='Avatar'
					className={styles.image}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					src='/assets/images/careers-page-testimonial-2.jpg'
					alt='Avatar'
					className={styles.image}
				/>
			</Carousel.Item>
		</Carousel>
	)
}

export default TestimonialsCarousel
