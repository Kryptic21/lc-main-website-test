/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './Testimonials.module.css'
import Masonry from 'react-masonry-css'
import { Carousel } from 'antd'

const contentStyle = {
	height: '200px',
	display: 'flex',
	width: '100%',
}

function Testimonials() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.carousel}>
				<Carousel style={{ height: '200px' }} autoplay>
					<div style={contentStyle}>
						<img
							src='/assets/images/tt.jpeg'
							alt='ss1'
							className={styles.carouselImage}
							loading='lazy'
						/>
					</div>
					<div style={contentStyle}>
						<img
							src='/assets/images/ss-praj-twitter.jpg'
							alt='ss2'
							className={styles.carouselImage}
							loading='lazy'
						/>
					</div>
					<div style={contentStyle}>
						<img
							src='/assets/images/testimonial-3.jpg'
							alt='ss3'
							className={styles.carouselImage}
							loading='lazy'
						/>
					</div>
					<div style={contentStyle}>
						<img
							src='assets/images/testimonial-4.jpg'
							alt='ss5'
							className={styles.carouselImage}
							loading='lazy'
						/>
					</div>
					<div style={contentStyle}>
						<img
							src='assets/images/testimonial.png'
							alt='ss4'
							className={styles.carouselImage}
							loading='lazy'
						/>
					</div>
				</Carousel>
			</div>

			<div className={styles.masonry}>
				<Masonry
					breakpointCols={2}
					className={styles.myMasonryGrid}
					columnClassName={styles.myMasonryGridColumn}
				>
					<div>
						<img
							src='/assets/images/tt.jpeg'
							alt='SS1'
							className={styles.testimonial}
							style={{ border: '1px solid black' }}
							loading='lazy'
						/>
					</div>

					<div>
						<img
							src='/assets/images/ss-praj-twitter.jpg'
							alt='SS2'
							className={`${styles.testimonial}`}
							loading='lazy'
						/>
					</div>

					<div>
						<img
							src='/assets/images/testimonial-3.jpg'
							alt='SS3'
							className={`${styles.testimonial}`}
							loading='lazy'
						/>
					</div>

					<div>
						<img
							src='assets/images/testimonial-4.jpg'
							alt='SS4'
							className={styles.testimonial}
							loading='lazy'
						/>
					</div>

					<div>
						<img
							src='/assets/images/testimonial.png'
							alt='SS5'
							className={`${styles.testimonial} ${styles.lastImage}`}
							style={{
								border: '1px solid black',
							}}
							loading='lazy'
						/>
					</div>
				</Masonry>
			</div>
		</div>
	)
}

export default Testimonials
